import { sum } from './math.js';

// test code
describe('math.js', () => {
	test('10 + 20 = 30', () => {
		const result = sum(10, 20);
		// expect(result).toBe(30);
		expect(result).not.toBe(30); // 30이 아닐때에 대한 케이스 점검을 먼저 한 후 범위를 줄요서 테스트 한다.
	});
});

// npm t
