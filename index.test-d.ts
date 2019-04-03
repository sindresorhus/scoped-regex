import {expectType} from 'tsd';
import scopedRegex = require('.');

expectType<RegExp>(scopedRegex());
expectType<RegExp>(scopedRegex({exact: true}));
