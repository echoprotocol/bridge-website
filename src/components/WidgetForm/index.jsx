import React, { Component } from 'react';
import WidgetFormField from '../WidgetFormField';
import IntegrationReactSelect from '../SearchSelect';

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
					className="full"
					error={null}
				/>
				<WidgetFormField
					id="widget-form-amount"
					label="Amount"
					placeholder="0"
					error={null}
				/>
				<IntegrationReactSelect />
			</form>
		);
	}

}

