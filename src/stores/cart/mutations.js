export default {
	addExistedProduct(state, payload) {
		state.cart.items[payload.index].qty++;
	},

	addNewProduct(state, payload) {
		state.cart.items.push(payload);
	},

	increaseCartCounter(state) {
		state.cart.qty++;
	},

	increaseCartSum(state, payload) {
		state.cart.total = state.cart.total + payload.price;
	}
}