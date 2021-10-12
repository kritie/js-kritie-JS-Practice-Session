// Import stylesheets
import './style.css';

// Write Javascript code!

/** Below code is for string and word reverse */
var string = 'Welcome to this Javascript Guide!';
var result1 = '!ediuG tpircsavaJ siht ot emocleW';
var result2 = 'emocleW ot siht tpircsavaJ !ediuG';

var reverserWords = (x) => {
  return x.split('').reverse().join('');
};

var reverseSentence = (y) => {
  return y.split(' ').reverse().join(' ');
};

var a = reverserWords(string);
// console.log(a);
var b = reverseSentence(a);
// console.log(b);

/********************************************* */

/** How to check if an object is an array or not? */

var arrayList = [1, 2, 3];
var objectList = { a: 1, b: 2, c: 3 };

function checkIfArray(x) {
  if (Object.prototype.toString.call(x) === '[object Array]') {
    // console.log(x, 'is arrayList');
  }
  if (typeof x === 'object') {
    // console.log(x, 'is an object');
  }
}

checkIfArray(arrayList);
checkIfArray(objectList);

/********************************************* */

/** How to empty an array in JavaScript? */

var myArrList = ['a', 'b', 'c', 'd', 'e', 'f'];

// Method 1
// var arr2 = myArrList;
// myArrList = [];
// console.log(myArrList);
// console.log(arr2);

// Method 2
// var arr2 = myArrList;
// myArrList.length = 0;
// console.log(myArrList);
// console.log(arr2);

// Method 3
// var arr2 = myArrList;
// myArrList.splice(0, myArrList.length);
// console.log(myArrList);
// console.log(arr2);

// Method 4
// var arr2 = myArrList;
// while (myArrList.length) {
//   myArrList.pop();
// }
// console.log(myArrList);
// console.log(arr2);

/**************************************** */

/*** How would you check if a number is an integer? */

function checkNumber(num) {
  if (num % 1 === 0) {
    console.log(num, 'is an integer');
  } else {
    console.log(num, 'not an integer');
  }
}

/************************************************* */

/*** Write a "mul" function which will properly when invoked as below syntax */

function mul(x) {
  return function (y) {
    return function (z) {
      return z * y * x;
    };
  };
}

// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

/************************************************* */

/************************************************ */

/** Closures */

function outerFunc(x) {
  var y = 6;
  function innerFunc(x) {
    console.log(x + y);
  }
  innerFunc(x);
}

// outerFunc(10);

/************ */

/** Find maxmium digit ********* */
const num = 149;
const maxRedigit = function (num) {
  return num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
};
// console.log(maxRedigit(num));

/***************************** */

/** Find analgram ************ */

function findAnalgram(x, y) {
  const xx = x.split('').sort().join();
  const yy = y.split('').sort().join();
  if (x.length === y.length && xx === yy) {
    return console.log('analgram');
  } else {
    return console.log('not analgram');
  }
}

// findAnalgram('india', 'aidni');
// findAnalgram('india', 'aidnhhi');

/**************************** */
// set time out
// console.log('a');

// setTimeout(() => console.log('b'), 0);

// setTimeout(() => console.log('c'), 11);

// function myFunction() {
//   setTimeout(() => console.log('d'), 0);
// }

// setTimeout(() => console.log('e'), 10);

// console.log('f');

// myFunction();

// setTimeout(() => console.log('g'), 9);

/** Downside triangle ********************** */

function printChars(myChar, count) {
  console.log('inside looop', myChar, count);
}

printChars(w, 4);

/********************************* */

let fruits = ['Apple', 'Banana'];

console.log(fruits);

let first = fruits.shift();

console.log(first);

let last = fruits.unshift('Strawberry');

console.log(last);

let myIndex = fruits.indexOf('Strawberry');
console.log(myIndex);

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);

let myVeggies = vegetables.splice(0, 1);

console.log(vegetables);

let myNewVeg = vegetables.slice(0, 3);

console.log(myNewVeg);

// const MyObj = { a: 1, b: 2, c: 3 };

// for (let i in MyObj) {
//   console.log(i);
// }

// for (let j of MyObj) {
//   console.log(j);
// }
