import React, { Component } from 'react';
import WidgetFormField from '../WidgetFormField';
import SearchSelect from '../SearchSelect';
import CopyField from '../CopyField';


export default class WidgetForm extends Component {

	state = {
		generatedWidget: '',
		options: [
			{
				label: 'Tokens',
				options: [
					{
						label: 'ECHO',
						id: '1.3.8',
					},
					{
						label: 'BST',
						id: '1.3.5',
					},
					{
						label: 'BUS',
						id: '1.4.8',
					},
					{
						label: 'BUZ',
						id: '1.2.4',
					},
					{
						label: 'FIZ',
						id: '5.2.1',
					},
				].map((option) => ({
					value: option.label,
					label: option.label,
					id: option.id,
				})),
			},
			{
				label: 'Assets',
				options: [
					{
						label: 'ECHO',
						id: '1.3.8',
					},
					{
						label: 'PST',
						id: '1.3.5',
					},
					{
						label: 'BLS',
						id: '1.4.8',
					},
					{
						label: 'BUZ',
						id: '1.2.4',
					},
					{
						label: 'FIZ',
						id: '5.2.1',
					},
				].map((option) => ({
					value: option.label,
					label: option.label,
					id: option.id,
				})),
			},
		],
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
				<div className="search-select-wrap">
					<SearchSelect classNameWrap="search-select-wrap" options={this.state.options} />
				</div>
				{
					this.state.generatedWidget &&
					<div className="widget-form-widget">
						<CopyField value={this.state.generatedWidget} textColor="#fff" backgroundColor="#566469" iconColor="#ABB2B4" />
					</div>
				}
				<div className="widget-button">
					<button className="btn-primary lg">
						<span className="text">Generate Widget</span>
					</button>
				</div>
			</form>
		);
	}

}

