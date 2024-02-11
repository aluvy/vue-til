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
			meta: { title: 'Login' },
		},
		{
			path: '/signup',
			name: 'SignupPage',
			component: () => import('@/views/SignupPage.vue'),
			meta: { title: 'Sign Up' },
		},
		{
			path: '/main',
			name: 'MainPage',
			component: () => import('@/views/MainPage.vue'),
			meta: { title: 'Today I Learned! ☺️' },
		},
		{
			path: '/add',
			name: 'AddPostPage',
			component: () => import('@/views/AddPostPage.vue'),
			meta: { title: 'Add Post' },
		},
		{
			path: '*',
			name: 'NotFoundPage',
			component: () => import('@/views/NotFoundPage.vue'),
			meta: { title: 'Page is not found' },
		},
	],
});
