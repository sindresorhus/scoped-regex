import test from 'ava';
import m from '.';

const matches = [
	'@sindresorhus/df',
	'@std/gz',
	'@foo-bar/unicorn.rainbow',
	'@foo/x',
	'@foo_bar/foo89'
];

const nonMatches = [
	'df',
	'foo-bar',
	'unicorn.rainbow',
	'@foo',
	'foo/bar',
	'@foo89/.bar',
	'@foo89/_bar'
];

test(t => {
	for (const x of matches) {
		t.true(m({exact: true}).test(x));
	}

	for (const x of nonMatches) {
		t.false(m({exact: true}).test(x));
	}

	for (const x of matches) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
});
