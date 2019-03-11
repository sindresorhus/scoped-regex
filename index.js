'use strict';

const regex = '@[a-z\\d][\\w-.]+/[a-z\\d][\\w-.]*';

const scopedRegex = options =>
	options && options.exact ?
		new RegExp(`^${regex}$`, 'i') :
		new RegExp(regex, 'gi');

module.exports = scopedRegex;
module.exports.default = scopedRegex;
