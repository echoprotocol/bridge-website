
import globalReducer from './GlobalReducer';
import WidgetReducer from './WidgetReducer';

export default {
	global: globalReducer.reducer,
	widget: WidgetReducer.reducer,
};
