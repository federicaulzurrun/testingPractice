import { reverseString } from "./taskTwo";

import expect from "expect";

const message = 'passed = input : feder - output : redef';

const reverse = reverseString('feder');

test (message, () => { expect(reverse).toBe('redef') });