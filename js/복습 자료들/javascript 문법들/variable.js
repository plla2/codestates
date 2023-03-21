//1. use strict
// add in ES5
//use this for Vanila Javascript
"use strict";

//2. variable ,
//let (added in ES6)
let globalName = "global Name";
{
  let name = "SH";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

//3. constants
//favor immutable data  type always for a few reasons
//   -security
//   -thread safety
//   -reduce human mistakes

const dayinweek = 7;
const maxnumber = 5;
console.log(dayinweek);
console.log(maxnumber);

// Note!
// Immutable data types: primitive types, frozen objects (i. e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

//4.variable types
//primitive, single items: number, string, boo  lean, null etc
//object, box container
//function, first-class function
const count = 17;
const size = 17.1;
console.log(`value : ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = "non number" / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value:${helloBob}, type:${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined
let x;
console.log(`value:${x}, type:${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2);
//true로 만들기 위해서는 .for을 붙인다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//.description을 이용하여 symbol로 변환하여 사용하여야 한다.

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
//  문자열 + 숫자는 문자열로 구분
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
//  문자열 / 문자열 이지만 안에 숫자가 있으므로 숫자 8/2로 구분
