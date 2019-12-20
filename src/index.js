import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'babel-polyfill';

import Routes from './routes'; // Or wherever you keep your reducers
import './assets/loader';
import './assets/favicon.ico';

// Create a history of your choosing (we're using a browser history in this case)
import history from './history';
import store from './store';


ReactDOM.render(
	<Provider store={store}>
		{/* ConnectedRouter will use the store from Provider automatically */}
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
