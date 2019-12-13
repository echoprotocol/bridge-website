import React, { Component, createRef } from 'react';

import DefaultSelect from '../DefaultSelect';
import CopyButton from '../CopyButton';

export default class QrGenerator extends Component {

	state = {
		selectOptions: [
			{ label: 'assets' },
			{ label: 'tokens' },
		].map((option) => ({
			value: option.label,
			label: option.label,
		})),
		account: 'test',
		currency: 'assets',
		id: '1',
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
					<h4 className="title">
						Try lt
					</h4>
					<div className="fields">
						<span className="static-field">
							https://echo-bridge.io/receive/
						</span>
						<input type="text" className="dynamic-field account" value={account} onChange={this.onAccountChange} />
						<span className="static-field">/</span>
						<span className="dropdown-field">
							<DefaultSelect
								onChange={this.onSelectChange}
								options={selectOptions}
								defaultValue={selectOptions[0]}
								onSelectChange={this.onSelectChange}
							/>
						</span>
						<span className="static-field">-</span>
						<input type="text" className="dynamic-field id" value={id} onChange={this.onIdChange} />
						<span className="static-field">/</span>
						<input type="text" className="dynamic-field amount" value={amount} onChange={this.onAmountChange} />
						<span className="static-field">/qr-code.png</span>
					</div>
					<div className="info">
						You can replace optional fields with "-"
					</div>
				</div>
				<div className="qr-generator-result">
					<h5 className="title">Result</h5>
					<div className="copy-field">
						<span className="copy-field-value">
							{`https://echo-bridge.io/receive/${account}/${currency}/${id}/${amount}/qr-code.png`}
						</span>
						<CopyButton value={`https://echo-bridge.io/receive/${account}/${currency}/${id}/${amount}/qr-code.png`} color="#ABB2B4" />
					</div>
				</div>
			</div>
		);
	}

}
