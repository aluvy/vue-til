import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import store from '@/store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
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
			meta: { auth: true, title: 'Today I Learned! ☺️' },
		},
		{
			path: '/add',
			name: 'AddPostPage',
			component: () => import('@/views/AddPostPage.vue'),
			meta: { auth: true, title: 'Add Post' },
		},
		{
			path: '/post/:id',
			name: 'EditPostPage',
			component: () => import('@/views/EditPostPage.vue'),
			meta: { auth: true, title: 'Edit Post' },
		},
		{
			path: '*',
			name: 'NotFoundPage',
			component: () => import('@/views/NotFoundPage.vue'),
			meta: { title: 'Page is not found' },
		},
	],
});

router.beforeEach((to, from, next) => {
	// console.log('to', to);
	// console.log(from);
	// 로그인하지 않은 사용자가 인증이 필요한 페이지로 접근할 때 ==> 로그인페이지로 이동
	if (to.meta.auth && !store.getters.isLogin) {
		next('/login');
		return;
	}
	// 로그인 한 사용자가 로그인/회원가입 페이지로 접근할 때 ==> 메인페이지로 이동
	// if (!to.meta.auth && store.getters.isLogin) {
	// 	next('/main');
	// 	return;
	// }
	next();
});

export default router;
