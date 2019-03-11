import {expectType} from 'tsd-check';
import scopedRegex from '.';

expectType<RegExp>(scopedRegex());
expectType<RegExp>(scopedRegex({exact: true}));
