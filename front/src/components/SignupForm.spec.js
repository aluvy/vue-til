import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
	test('아이디를 이메일로 작성했는지 체크', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: 'test@test.com',
					password: '',
					nickname: '',
				};
			},
		});
		const warningText = wrapper.find('.form-valid.danger');
		expect(warningText.exists()).toBeTruthy(); // exists() 존재하는지 확인, 그 값이 true 인지
	});

	test('ID, PW, nickname이 입력되지 않으면 회원가입 버튼이 비활성화 된다', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: 'test@test.com',
					password: '',
					nickname: '',
				};
			},
		});
		const button = wrapper.find('.btn');
		console.log(button.attributes()); // { type: 'submit', disabled: 'disabled', class: 'btn' }
		expect(button.element.disabled).toBeTruthy();
	});
});
