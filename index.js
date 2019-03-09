'use strict';

const regex = '@[a-z0-9][\\w-.]+/[a-z0-9][\\w-.]*';

const scopedRegex = options =>
	options && options.exact ?
		new RegExp(`^${regex}$`, 'i') :
		new RegExp(regex, 'gi');

module.exports = scopedRegex;
module.exports.default = scopedRegex;
