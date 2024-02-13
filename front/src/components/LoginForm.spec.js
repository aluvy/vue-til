import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 빈문자열이 설정되어 있어야 한다.', () => {
		const instance = new Vue(LoginForm).$mount(); // vue에 loginform을 마운트 시킨다
		// console.log(instance);
		expect(instance.username).toBe('');
	});
});
