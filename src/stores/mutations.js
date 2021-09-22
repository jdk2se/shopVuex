export default {
	loggedIn(state, payload) {
		state.isLoggedIn = payload.value;
	},
	loggedOut(state, payload) {
		state.isLoggedIn = payload.value;
	}
}