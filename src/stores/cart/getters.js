export default {
	getCart(state) {
		return state.cart;
	},

	getTotal(state) {
		return state.cart.total.toFixed(2);
	},

	getItems(state) {
		return state.cart.items;
	},
}