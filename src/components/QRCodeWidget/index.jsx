import React from 'react';
import PropTypes from 'prop-types';
import Qr from 'qrcode.react';

import bridge from '../../assets/images/logo.svg';

class QRCodeWidget extends React.Component {

	onPayClick(e) {
		const { account } = this.props;
		e.preventDefault();
		this.props.pay(account);
	}

	renderAmount() {
		const { currency } = this.props;
		const amount = currency.get('amount') === '-' ? 0 : currency.get('amount');
		return amount;
	}

	render() {
		const {
			account, error,
			currency,
			isConnected,
		} = this.props;
		return (
			<div className="widget-page">
				<div className="header">
					<img className="logo" src={bridge} alt="Bridge" />
				</div>
				<div className="body">
					<div className="info">
						Brings ECHO to your browser
					</div>
					<div className="content">
						<div className="qr">
							<Qr
								value={`${currency.get('id')}:${account}?amount=${currency.get('amount')}`}
								size={350}
							/>
						</div>
						<div className="reciever">
							<div className="value">{account}</div>
							<div className="label">Reciever</div>
						</div>

						<div className="amount">
							<div className="value">
								{this.renderAmount()}
								{' '}
								{currency.get('symbol')}
							</div>
							<div className="label">Amount</div>
						</div>
						<button
							onClick={(e) => this.onPayClick(e)}
							disabled={!isConnected}
							className="btn-primary"
						>
							<span className="text">Pay with Echo Bridge</span>
						</button>
					</div>
					{
						error &&
						<div className="toast error">
							<div className="toast-content">
								{error}
							</div>
						</div>
					}

				</div>

				<div className="footer">© Copyright 2019</div>
			</div>
		);
	}

}

QRCodeWidget.propTypes = {
	pay: PropTypes.func.isRequired,
	isConnected: PropTypes.bool.isRequired,
	account: PropTypes.string.isRequired,
	currency: PropTypes.object.isRequired,
	error: PropTypes.string.isRequired,
};

export default QRCodeWidget;
