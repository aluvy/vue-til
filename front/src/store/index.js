import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pageTit: '',
		username: '',
		nickname: '',
	},
	getters: {
		getUsername: state => state.username,
		getNickname: state => state.nickname,
		isLogin: state => state.username !== '',
	},
	mutations: {
		setUserinfo(state, payload) {
			state.username = payload.username;
			state.nickname = payload.nickname;
		},
		clearUserinfo(state) {
			state.username = '';
			state.nickname = '';
		},
	},
	actions: {},
});
