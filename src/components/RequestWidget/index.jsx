import React, { Component } from 'react';
import WidgetForm from '../WidgetForm';

export default class RequestWidget extends Component {

	render() {
		return (
			<section className="request-widget">
				<div className="container">
					<div className="request-widget-wrap">
						<h3 className="request-widget-title">
							GENERATE PAYMENT REQUEST WIDGET
						</h3>
						<p className="request-widget-info">A payment request widget is an easy and convenient way to request payment. The user who jumps to the URL sees a widget with all the information needed to make the transaction: a QR code, bridge payment button, the name of the receiver account, the amount of funds and currency type.</p>
						<WidgetForm />
					</div>
				</div>
			</section>
		);
	}

}

