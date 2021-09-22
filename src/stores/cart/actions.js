export default {
	addProductToCart(context, productData) {
		const cart = context.getters.getCart;

		const productInCartIndex = cart.items.findIndex(
			(ci) => ci.productId === productData.id
		);

		if (productInCartIndex >= 0) {
			context.commit('addExistedProduct', {
				index: productInCartIndex,
			});
		} else {
			const newItem = {
				productId: productData.id,
				title: productData.title,
				image: productData.image,
				price: productData.price,
				qty: 1,
			};

			context.commit('addNewProduct', newItem);
		}

		context.commit('increaseCartCounter');
		context.commit('increaseCartSum', {
			price: productData.price,
		});
	},

	removeProductFromCart() {

	}
}