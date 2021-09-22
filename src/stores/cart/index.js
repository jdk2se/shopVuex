import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			cart: { items: [], total: 0, qty: 0 },
		}
	},
	getters: getters,
	actions: actions,
	mutations: mutations,
}