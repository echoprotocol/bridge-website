import React, { Component } from 'react';
import WidgetFormField from '../WidgetFormField';
import SearchSelect from '../SearchSelect';
import CopyField from '../CopyField';

export default class WidgetForm extends Component {

	toggleError = () => {
		this.setState({
			error: this.state.error ? null : "Account name shouldn't be empty",
		});
	}
	render() {
		return (
			<form className="widget-form">
				<h4 className="widget-form-title">Fill The Form To Get Widget</h4>

				<WidgetFormField
					id="widget-form-account"
					label="Account"
					placeholder="Account"
					className="lg"
					error={null}
				/>

				<WidgetFormField
					id="widget-form-amount"
					label="Amount"
					placeholder="0"
					className="md"
					error={null}
				/>
				<SearchSelect className="search-select-wrap" />
				<CopyField value="https://echo-bridge.io/receive/testaccount_12345/asset-0/10000000/widget" color="#ffffff" background="#35454a" />
				<div className="widget-button">
					<button className="btn-primary">
						<span className="text">Generate Widget</span>
					</button>
				</div>
			</form>
		);
	}

}

