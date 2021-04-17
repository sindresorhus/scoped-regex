import {expectType} from 'tsd';
import scopedRegex from './index.js';

expectType<RegExp>(scopedRegex());
expectType<RegExp>(scopedRegex({exact: true}));
