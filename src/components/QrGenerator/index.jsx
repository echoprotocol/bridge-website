import React, { Component } from 'react';

import DefaultSelect from '../DefaultSelect';
import CopyField from '../CopyField';
import { URL_BASE_PATH } from '../../constants/RouterConstants';

export default class QrGenerator extends Component {

	state = {
		selectOptions: [
			{ label: 'asset' },
			{ label: 'token' },
		].map((option) => ({
			value: option.label,
			label: option.label,
		})),
		account: 'test',
		currency: 'asset',
		id: '0',
		amount: '-',
	}

	onAccountChange = (e) => {
		this.setState({
			account: e.target.value,
		});
	}
	onIdChange = (e) => {
		this.setState({
			id: e.target.value,
		});
	}
	onSelectChange = (selectRef) => {
		setTimeout(() => {
			this.setState({
				currency: selectRef.current.state.value.label,
			});
		}, 0);
	};
	onAmountChange = (e) => {
		this.setState({
			amount: e.target.value,
		});
	}
	render() {
		const {
			selectOptions, account, currency, id, amount,
		} = this.state;
		return (
			<div className="qr-generator">
				<div className="qr-generator-form">
					<div className="title">
						Try lt
					</div>
					<div className="fields">
						<span className="static-field">
							{URL_BASE_PATH}
						</span>
						<input type="text" className="dynamic-field account" value={account} onChange={this.onAccountChange} />
						<span className="static-field">/</span>
						<span className="dropdown-field">
							<DefaultSelect
								onChange={this.onSelectChange}
								options={selectOptions}
								defaultValue={selectOptions[0]}
							/>
						</span>
						<span className="static-field">-</span>
						<input type="text" className="dynamic-field id" value={id} onChange={this.onIdChange} />
						<span className="static-field">/</span>
						<input type="text" className="dynamic-field amount" value={amount} onChange={this.onAmountChange} />
						<span className="static-field">/widget</span>
					</div>
					<div className="info">
						You can replace optional fields with &quot;-&quot;
					</div>
				</div>
				<div className="qr-generator-result">
					<h4 className="h4 title">Result</h4>
					<CopyField
						value={`${URL_BASE_PATH}${account}/${currency}-${id}/${amount}/widget`}
						iconColor="#ABB2B4"
						textColor="#4C8BF5"
						backgroundColor="#fff"
					/>
				</div>
			</div>
		);
	}

}
