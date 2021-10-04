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
	},

	removeCartProduct(state, payload) {
		console.log(payload.index)
		const index = payload.index;
		const productInCartIndex = state.cart.items.findIndex(
			(cartItem) => cartItem.productId === index
		);

		const prodData = state.cart.items[productInCartIndex];
		state.cart.items.splice(productInCartIndex, 1);
		state.cart.qty -= prodData.qty;
		state.cart.total -= prodData.price * prodData.qty;
	},
}
