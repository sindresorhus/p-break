import test from 'ava';
import m from '.';

const fixture = Symbol('fixture');

test('break', async t => {
	const result = await Promise.resolve(fixture)
		.then(val => m(val))
		.then(() => 'noop')
		.catch(m.end);

	t.is(result, fixture);
});

test('non-break error', async t => {
	t.plan(1);

	const fixtureErr = new Error('fixture');

	await Promise.resolve(fixture)
		.then(() => Promise.reject(fixtureErr))
		.catch(m.end)
		.catch(err => {
			t.is(err, fixtureErr);
		});
});
