// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { post } from './index.js';

// 학습노트 조회 API
function fetchPosts() {
	return post.get('/posts');
}

// 학습노트 추가 API
function addPost(postData) {
	return post.post('/posts', postData);
}

export { fetchPosts, addPost };
