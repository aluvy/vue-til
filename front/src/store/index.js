import Vue from 'vue';
import Vuex from 'vuex';
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie } from '@/utils/cookies.js';
import { loginUser } from '@/api/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pageTit: '',
		username: getUserFromCookie() || '',
		nickname: '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		getPagetit: state => state.pageTit,
		getUsername: state => state.username,
		getNickname: state => state.nickname,
		getToken: state => state.token,
		isLogin: state => state.username !== '',
	},
	mutations: {
		setPagetit(state, payload) {
			state.pageTit = payload.pageTit;
		},
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
		},
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN(context, payload) {
			const res = await loginUser(payload.userData);

			context.commit('setUserinfo', { user: res.data.user });
			context.commit('setToken', { token: res.data.token });
			saveAuthToCookie(res.data.token);
			saveUserToCookie(res.data.user.username);

			return res;
		},
	},
});
