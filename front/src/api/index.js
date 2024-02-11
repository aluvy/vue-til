import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// token 값이 필요 없는 API 함수
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}
export const user = createInstance();

// token 값이 필요한 API 함수
/**
 * CREATE - posts
 * POST - posts
 * GET - posts {id}
 * DELETE - posts {id}
 */
function createInstanceAuth() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}`,
	});
	return setInterceptors(instance);
}
export const post = createInstanceAuth();
