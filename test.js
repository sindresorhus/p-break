import test from 'ava';
import pBreak from './index.js';

const fixture = Symbol('fixture');

test('break', async t => {
	const result = await Promise.resolve(fixture)
		.then(value => pBreak(value))
		.then(() => 'noop')
		.catch(pBreak.end);

	t.is(result, fixture);
});

test('non-break error', async t => {
	t.plan(1);

	const errorFixture = new Error('fixture');

	await Promise.resolve(fixture)
		.then(() => Promise.reject(errorFixture))
		.catch(pBreak.end)
		.catch(error => {
			t.is(error, errorFixture);
		});
});
