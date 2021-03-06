import React, { Component } from 'react';
import WidgetFormField from '../WidgetFormField';
import SearchSelect from '../SearchSelect';
import CopyField from '../CopyField';
import { isAccountNameError, isAmountError } from '../../helpers/ValidateHelper';
import { URL_BASE_PATH } from '../../constants/RouterConstants';

export default class WidgetForm extends Component {

	state = {
		generatedWidget: '',
		account: {
			value: '',
			error: '',
		},
		amount: {
			value: '',
			error: '',
		},
		options: [
			{
				label: 'Assets',
				options: [
					{
						label: 'ECHO',
						id: '1.3.0',
					},
					{
						label: 'EETH',
						id: '1.3.1',
					},
					{
						label: 'EBTC',
						id: '1.3.2',
					},
				].map((option) => ({
					value: option.label,
					label: option.label,
					id: option.id,
				})),
			},
		],
		currencyId: '0',
	}

	onAccountChange = (e) => {
		e.preventDefault();
		this.setState({
			account: {
				...this.state.account,
				value: e.target.value.toLowerCase(),
			},
		}, this.generateLink);
	}

	onAmountChange = (e) => {
		e.preventDefault();
		const { value } = e.target;
		const isError = isAmountError(value);
		if (isError) {
			this.setState({
				amount: {
					...this.state.amount,
					error: isError,
				},
			});
		} else {
			this.setState({
				amount: {
					error: false,
					value,
				},
			}, this.generateLink);
		}
	}

	onSelectChange=(optionSelected) => {
		const id = optionSelected.id.split('.')[2];
		this.setState({
			currencyId: id,
		}, this.generateLink);
	}

	removeAcountError = () => {
		this.setState({
			account: {
				...this.state.account,
				error: false,
			},
		});
	}

	removeAmountError = () => {
		this.setState({
			amount: {
				...this.state.amount,
				error: false,
			},
		});
	}

	generateLink = () => {
		const { account: { value: accountValue }, amount: { value: amountValue }, currencyId } = this.state;
		this.setState({
			generatedWidget: `${URL_BASE_PATH}${accountValue}/asset-${currencyId}/${amountValue || null}/widget`,
		});
	}

	submitForm = (e) => {
		e.preventDefault();
		const accountFailed = isAccountNameError(this.state.account.value);
		if (accountFailed) {
			this.setState({
				account: {
					...this.state.account,
					error: accountFailed,
				},
			});
		} else {
			this.generateLink();
		}
	}


	render() {
		const { account: { value: accountValue, error: accountError }, amount: { value: amountValue, error: amountError } } = this.state;
		return (
			<form className="widget-form" onSubmit={(e) => this.submitForm(e)}>
				<h4 className="h4 widget-form-title">Fill The Form To Get Widget</h4>

				<WidgetFormField
					id="widget-form-account"
					label="Account"
					placeholder="Account"
					className="lg"
					error={accountError}
					value={accountValue}
					onChange={this.onAccountChange}
					onFocus={this.removeAcountError}
				/>

				<WidgetFormField
					id="widget-form-amount"
					label="Amount"
					placeholder="0"
					className="md"
					error={amountError}
					value={amountValue}
					onChange={this.onAmountChange}
					onBlur={this.removeAmountError}
				/>
				<div className="search-select-wrap">
					<SearchSelect options={this.state.options} onChange={this.onSelectChange} />
				</div>
				{
					this.state.generatedWidget &&
					<div className="widget-form-widget">
						<CopyField value={this.state.generatedWidget} textColor="#fff" backgroundColor="#566469" iconColor="#ABB2B4" />
					</div>
				}
				<div className="widget-button">
					<button className="btn-primary lg" type="submit">
						<span className="text">Generate Widget</span>
					</button>
				</div>
			</form>
		);
	}

}
