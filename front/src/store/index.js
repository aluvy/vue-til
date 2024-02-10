import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pageTit: '',
		username: '',
		nickname: '',
		token: '',
	},
	getters: {
		getUsername: state => state.username,
		getNickname: state => state.nickname,
		getToken: state => state.token,
		isLogin: state => state.username !== '',
	},
	mutations: {
		setUserinfo(state, payload) {
			state.username = payload.user.username;
			state.nickname = payload.user.nickname;
		},
		setToken(state, payload) {
			state.token = payload.token;
		},
		clearUserinfo(state) {
			state.username = '';
			state.nickname = '';
			state.token = '';
		},
	},
	actions: {},
});
