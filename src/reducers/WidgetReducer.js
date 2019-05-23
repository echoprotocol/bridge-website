import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	error: '',
	currency: Map({
		id: '0',
		type: 'asset',
		account: '',
		amount: 0,
	}),
});

export default createModule({
	name: 'widget',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
	},
});
