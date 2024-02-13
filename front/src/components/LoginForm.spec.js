import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

// test (1)
// describe('LoginForm.vue', () => {
// 	test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 빈문자열이 설정되어 있어야 한다.', () => {
// 		const instance = new Vue(LoginForm).$mount(); // vue에 loginform을 마운트 시킨다
// 		// console.log(instance);
// 		expect(instance.username).toBe('');
// 	});
// });

// @vue/test-utils 라이브러리 이용
describe('LoginForm.vue', () => {
	// test (2)
	// test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 빈문자열이 설정되어 있어야 한다.', () => {
	// 	const wrapper = shallowMount(LoginForm);
	// 	// wrapper.vm : instance
	// 	expect(wrapper.vm.username).toBe('');
	// });

	// test (3)
	// test('ID는 이메일 형식이어야 한다', () => {
	// 	const wrapper = shallowMount(LoginForm, {
	// 		data() {
	// 			return {
	// 				username: 'test',
	// 			};
	// 		},
	// 	});
	// 	const usernameInput = wrapper.findAllComponents(FormInput);
	// 	console.log('인풋 박스의 값', usernameInput.at(0).props().value); // 결과 : test
	// 	console.log('isUsernameValid 의 값', wrapper.vm.isUsernameValid); // false
	// });

	// test (4)
	// 사용자 관점믜 테스트 코드
	test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});

		const warningText = wrapper.find('.form-valid.danger');
		// console.log(warningText.html());
		expect(warningText.exists()).toBeTruthy(); // exists() 존재하는지 확인, 그 값이 true 인지
	});

	//
	test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@test.com',
					password: '',
				};
			},
		});
		const button = wrapper.find('.btn');
		console.log(button.attributes());
		expect(button.element.disabled).toBeTruthy();
	});
});
