import React from 'react';
import { Route, Switch } from 'react-router';

import App from './containers/App';
import Index from './containers/Index';
import QRCodeWidget from './containers/QRCodeWidget';
import PageNotFound from './containers/PageNotFound';

import { INDEX_PATH, QR_CODE_WIDGET_PATH } from './constants/RouterConstants';

export default class Routes extends React.Component {

	render() {
		return (
			<App>
				<Switch>
					<Route exact path={INDEX_PATH} component={Index} />
					<Route exact path={QR_CODE_WIDGET_PATH} component={QRCodeWidget} />
					<Route component={PageNotFound} />
				</Switch>
			</App>
		);
	}

}
