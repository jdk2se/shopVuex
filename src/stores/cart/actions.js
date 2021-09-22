export default {
	addProductToCart({context, getters}, productData) {
		const cart = getters.getCart;

		const productInCartIndex = cart.items.findIndex(
			(ci) => ci.productId === productData.id
		);

		if (productInCartIndex >= 0) {
			// @todo 22.09.2021-dudnik.es mutate
			cart.items[productInCartIndex].qty++;
		} else {
			const newItem = {
				productId: productData.id,
				title: productData.title,
				image: productData.image,
				price: productData.price,
				qty: 1,
			};

			// @todo 22.09.2021-dudnik.es mutate
			cart.items.push(newItem);
		}

		// @todo 22.09.2021-dudnik.es mutate
		this.cart.qty++;
		this.cart.total += productData.price;
	},
}