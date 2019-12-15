import React, { Component } from 'react';
import WidgetFormField from '../WidgetFormField';
import SearchSelect from '../SearchSelect';
import CopyButton from '../CopyButton';

export default class WidgetForm extends Component {

	state = {
		generatedWidget: '',
	}

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
				<SearchSelect classNameWrap="search-select-wrap" />
				{
					this.state.generatedWidget &&
					<div className="widget-form-widget">
						<div className="copy-field">
							<span className="copy-field-value">
								{this.state.generatedWidget}
							</span>
							<CopyButton value={this.state.generatedWidget} iconColor="#ABB2B4" />
						</div>
					</div>
				}
				<div className="widget-button">
					<button className="btn-primary">
						<span className="text">Generate Widget</span>
					</button>
				</div>
			</form>
		);
	}

}

