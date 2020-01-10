import echo from 'echojs-lib';
import { keccak256 } from 'js-sha3';
import { Map } from 'immutable';
import BN from 'bignumber.js';

import BaseActionsClass from './BaseActionsClass';
import WidgetReducer from '../reducers/WidgetReducer';
import { getTransferCode, toUtf8 } from '../helpers/GlobalHelper';

import {
	MAINNET,
	CORE_ASSET,
	ASSET_PREFIX,
	CONTRACT_PREFIX,
	COMMITTEE_ACCOUNT,
} from '../constants/GlobalConstants';

class WidgetActions extends BaseActionsClass {

	constructor() {
		super(WidgetReducer);
	}

	async getTokenDetails(contractId) {

		const [symbol, decimals] = await Promise.all([
			echo.api
				.callContractNoChangingState(contractId, '1.2.12', CORE_ASSET, keccak256('symbol()').substr(0, 8)),
			echo.api
				.callContractNoChangingState(contractId, '1.2.12', CORE_ASSET, keccak256('decimals()').substr(0, 8)),
		]);

		return {
			symbol: toUtf8(symbol.substr(-64)),
			precision: parseInt(decimals, 16),
		};
	}

	updateAmount(amount) {
		amount = new BN(amount);

		if (amount.isNaN()) {
			return '0';
		}

		return amount.toString(10);
	}

	setCurrency(type, id, amount) {
		return async (dispatch) => {

			if (type === 'asset') {
				id = ASSET_PREFIX + id;
				let [asset] = await echo.api.getAssets([id]);

				if (!asset) {
					asset = {
						symbol: 'ECHO',
						precision: 8,
					};
				}

				const { symbol, precision } = asset;

				amount = this.updateAmount(amount);

				dispatch(this.setValue('currency', new Map({
					type, symbol, id, amount, precision,
				}), false));

				return;
			}

			id = CONTRACT_PREFIX + id;

			const { symbol, precision } = await this.getTokenDetails(id);

			amount = new BN(amount).toString();
			amount = this.updateAmount(amount, precision);
			dispatch(this.setValue('currency', new Map({
				type, symbol, id, amount, precision,
			}), false));
		};
	}

	payWithBridge(account) {
		return async (dispatch, getState) => {
			dispatch(this.setValue('error', '', false));
			const currency = getState().widget.get('currency');

			if (!Number(currency.get('amount'))) {
				dispatch(this.setValue('error', 'Amount should be more than 0', false));
				return;
			}
			if (!window.echojslib) {
				dispatch(this.setValue('error', "Extension isn't installed", false));
				dispatch(this.setValue('downloadLink', 'https://chrome.google.com/webstore/detail/echo-bridge/ginklfodpcgldnicehmlpehfmgjhbdcl', false));
				return;
			}
			const access = await window.echojslib.extension.getAccess();

			if (!access) {
				dispatch(this.setValue('error', 'Request denied', false));
				return;
			}

			const currentNetwork = await window.echojslib.extension.getCurrentNetwork();

			if (MAINNET !== currentNetwork.url) {
				dispatch(this.setValue('error', 'Wrong network', false));
				return;
			}

			const accounts = await window.echojslib.extension.getAccounts();
			const sender = !accounts.length ? COMMITTEE_ACCOUNT : accounts.filter((acc) => (acc.active))[0].id;

			let transactionSign = {};
			const connected = window.echojslib.echo.isConnected;

			if (!connected) {
				await window.echojslib.echo.connect();
			}
			account = await window.echojslib.echo.api.getAccountByName(account);

			if (!account) {
				dispatch(this.setValue('error', 'Invalid account name', false));
				return;
			}

			const { id: receiver } = account;

			let operation = '';

			if (currency.get('type') === 'asset') {
				operation = window.echojslib.constants.OPERATIONS_IDS.TRANSFER;
				transactionSign = {
					from: sender,
					to: receiver,
					amount: {
						asset_id: currency.get('id'),
						amount: new BN(parseFloat(currency.get('amount'))).times(10 ** currency.get('precision')).integerValue(),
					},
				};
			}

			if (currency.get('type') === 'token') {

				operation = window.echojslib.constants.OPERATIONS_IDS.CALL_CONTRACT;
				transactionSign = {
					registrar: sender,
					value: {
						asset_id: CORE_ASSET,
						amount: 0,
					},

					code: getTransferCode(receiver, new BN(parseFloat(currency.get('amount'))).times(10 ** currency.get('precision')).integerValue()),
					callee: currency.get('id'),
				};
			}

			const tr = window.echojslib.echo.createTransaction();
			tr.addOperation(operation, transactionSign);

			try {
				await tr.signWithBridge();
				await tr.broadcast();
			} catch (e) {
				dispatch(this.setValue('error', 'Transaction rejected', false));
			}
		};
	}

}

export default new WidgetActions();
