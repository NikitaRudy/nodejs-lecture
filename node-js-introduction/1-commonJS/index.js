const add = require('./a');
const { mul } = require('./b');
const moduleC = require('./c');

/*
es6 modules analogue:
import add from './a'
import { mul } from './b'
import * as moduleC from './c'
*/

console.log(`1 + 2 = ${add(1, 2)}` );
console.log(`2 * 2 = ${mul(2, 2)}`);
console.log(`4 / 2 = ${moduleC.dev(4, 2)}`);
console.log(`4 ** 2 = ${moduleC.pow(4, 2)}`);