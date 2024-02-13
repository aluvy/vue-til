import { sum } from './math.js';

// test code
describe('math.js', () => {
	test('10 + 20 = 30', () => {
		const result = sum(10, 20);
		expect(result).toBe(30);
	});
});

// npm t
