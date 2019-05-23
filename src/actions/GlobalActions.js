import echo from 'echojs-lib';
import GlobalReducer from '../reducers/GlobalReducer';
import BaseActionsClass from './BaseActionsClass';

import { MAINNET } from '../constants/GlobalConstants';

class GlobalActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(GlobalReducer);
	}

	connect() {
		return async (dispatch) => {
			try {
				await echo.connect(MAINNET);
				dispatch(this.setValue('isConnected', true));
			} catch (e) {
				dispatch(this.setValue('isConnected', false));
			}
		};
	}

}

const GlobalActions = new GlobalActionsClass();
export default GlobalActions;
