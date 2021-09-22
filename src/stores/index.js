import {createStore} from 'vuex';

import productsModule from './products/index';
import cartModule     from './cart/index';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
	modules: {
		products: productsModule,
		cart: cartModule,
	},
	state() {
		return {
			isLoggedIn: false,
		}
	},
	getters: {
		isLoggedIn(state) {
			return state.isLoggedIn;
		}
	},
	mutations: mutations,
	actions: actions,
});

export default store;