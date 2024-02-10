import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		nickname: '',
	},
	getters: {
		getUsername: state => state.username,
		getNickname: state => state.nickname,
	},
	mutations: {
		setUserinfo(state, payload) {
			state.username = payload.username;
			state.nickname = payload.nickname;
		},
	},
	actions: {},
});
