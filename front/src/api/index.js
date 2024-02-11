import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// axios 초기화
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
	return instance.post('/signup', userData); // promise return
}

// 로그인 API
function loginUser(userData) {
	return instance.post('/login', userData); // promise return
}

// 학습노트 데이터 조회 API
function fetchPosts() {
	return instance.get('/posts');
}

// 학습노트 추가
function addPost(postData) {
	return instance.post('/posts', postData);
}

export { registerUser, loginUser, fetchPosts, addPost };
