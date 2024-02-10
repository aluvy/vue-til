import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	// mode: 'history',
	// base: '/#',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name: 'LoginPage',
			component: LoginPage,
			meta: {
				title: 'login',
			},
		},
		{
			path: '/signup',
			name: 'SignupPage',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			name: 'MainPage',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '*',
			name: 'NotFoundPage',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
