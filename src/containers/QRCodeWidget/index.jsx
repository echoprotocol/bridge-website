import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import QRCodeWidgetComponent from '../../components/QRCodeWidget';
import WidgetActions from '../../actions/WidgetActions';
import GlobalActions from '../../actions/GlobalActions';
import { validateWidgetCurrencyType } from '../../helpers/WidgetHelper';

class QRCodeWidget extends React.Component {


	async componentWillMount() {
		await this.props.connect();
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.isConnected && this.props.isConnected) {
			this.setCurrency();
		}
	}

	setCurrency() {
		let { match: { 	params: { currency } } } = this.props;
		const { match: { params: { amount } } } = this.props;
		currency = currency === '-' ? ['asset', '0'] : currency.split('-');

		const type = currency[0];
		const id = currency[1];

		const error = validateWidgetCurrencyType(type);

		if (error) {
			this.props.setCurrency('asset', '0', amount);
			return;
		}

		this.props.setCurrency(type, id, amount);
	}

	render() {
		const {
			match: {
				params: { account },
			},
			currency,
			error,
			isConnected,
			pay,
		} = this.props;

		return (
			<QRCodeWidgetComponent
				pay={pay}
				account={account}
				currency={currency}
				error={error}
				isConnected={isConnected}

			/>
		);
	}

}

QRCodeWidget.propTypes = {
	match: PropTypes.object.isRequired,
	pay: PropTypes.func.isRequired,
	setCurrency: PropTypes.func.isRequired,
	connect: PropTypes.func.isRequired,
	currency: PropTypes.object.isRequired,
	error: PropTypes.string.isRequired,
	isConnected: PropTypes.bool.isRequired,
};

export default withRouter(connect(
	(state) => ({
		currency: state.widget.get('currency'),
		error: state.widget.get('error'),
		isConnected: state.global.get('isConnected'),
	}),
	(dispatch) => ({
		pay: (account) => dispatch(WidgetActions.payWithBridge(account)),
		setCurrency: (type, id, amount) => dispatch(WidgetActions.setCurrency(type, id, amount)),
		setValue: (field, currency) => dispatch(WidgetActions.setValue(field, currency, false)),
		connect: () => dispatch(GlobalActions.connect()),
	}),
)(QRCodeWidget));
