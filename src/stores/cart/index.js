import actions from './actions';
import mutations from './mutations';

export default {
	namespaced: true,
	state() {
		return {
			cart: { items: [], total: 0, qty: 0 },
		}
	},
	getters: {
		getCart(state) {
			return state.cart;
		}
	},
	actions: actions,
	mutations: mutations,
}