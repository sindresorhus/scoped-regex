import test from 'ava';
import scopedRegex from '.';

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

test('scopedRegex', t => {
	for (const match of matches) {
		t.true(scopedRegex({exact: true}).test(match));
	}

	for (const nonMatch of nonMatches) {
		t.false(scopedRegex({exact: true}).test(nonMatch));
	}

	for (const match of matches) {
		t.is((scopedRegex().exec(`foo ${match} bar`) || [])[0], match);
	}
});
