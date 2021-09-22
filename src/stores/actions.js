export default {
	login(context) {
		context.commit('loggedIn', {value: true});
	},
	logout(context) {
		context.commit('loggedOut', {value: false});
	}
}