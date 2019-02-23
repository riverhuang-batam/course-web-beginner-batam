# JavaScript 2

---

## JavaScript Intro & Data Types

In JavaScript, there are several data types:

- `String`: is a text or set of characters
- `Number`: is a numeric types
- `Boolean`: represents one or two value: true or false.
- `Array`: store multiple values in a single variable.
- `Object` with `key` & `value`: used to store a information of multiple values
- `JSON`: JavaScript Object Notation. it's same with `Object`

Examples:

```js
// String
let string1 = "this is a string";
let string2 = "another string";
let string3 = `${string1} and ${string2}`;
console.log('string3 nilainya adalah', string3);

// Number
let decimal1 = 2;
let decimal2 = 2.24;
let decimal3 = 2 + 2; // result: 4
let decimal4 = 1 + 2 / 4; // result: 1.5
console.log('nilai decimal4 is : ', decimal4 )

// Boolean
let isTrue = true;

// Array
let info = ["first", 100, 200, true, "last"];
info[0]; // result: "first"
info[1]; // result: 100
info[4]; // result: last
info.length; // result: 5

// Object
let person = {
  id: 1,
  name: "Budi",
  info: info
};
```

---

## JavaScript Variable

Variable is a way to store a value that can be used later.

Examples:

```js
let y = ""; // can be changed later
const z = ""; // cannot be changed later
```

---

## JavaScript Symbols

### Arithmetic Operator

Arithmetic operators are used to perform arithmetic between variables and/or values.

Examples:

```js
let plus = 2 + 2;
let minus = 3 - 2;
let modulus = 7 % 2; // result:1  . % we call it modulus
let multiple = 3 * 2 + 1; // result:7
```

### Comparison

Comparison operator is used to compare between two value and generate result between true or false.

Examples:

```js
let number = 7

let result = number == 7 // result: true
result = number === 7 // result: true
result = number == "7" // result: true

result = number != 7 // result: false
result = number ==="7" // result: false

result = !true // result: false

result = true && false // result: false
result = true && true // result: true

result = true || false // result: true
result = true || true // result: true

result = undefined || "string"// result: String
```

---

## JavaScript Built-In Objects & Methods

JavaScript has **built in** methods to manipulate object in variables, here is the example...

Examples:

```js
// Math
let result = Math.PI; // result: 3.141592653589793
result = Math.round(4.7); // result: 5
result = Math.round(4.4); // result: 4
```

```js
// Date
let result = new Date(); // result: [current date]
let year = result.getFullYear(); //year: 2018
```

```js
// Array
let alphabet = ["a", "b", "c", "d"];

let result = alphabet.join("_"); // result: a_b_c_d
result = alphabet.length(); // result: 5
result = alphabet.includes("a"); // result: true
result = alphabet.push("e"); // result: 5, with alphabet being ["a", "b", "c", "d", "e"]
result = alphabet.pop(); // result: e, with alphabet being ["a", "b", "c", "d"] again
```

---

## use other libraries to ease our code

### [numeral.js](http://numeraljs.com/) 

formatting & manipulating numbers.

#### Installation & Usage
add inside `body` tag on below in our html file.
`<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>`

on js file
```js
  // example

  let nilai = numeral('1,000,000,000,200.00');
  let nilaiInteger = nilai.value();
  console.log(nilaiInteger);
  console.log('nilainya adalah ',nilaiInteger.format('Rp 0.00'));

  let nilaiKe2 = numeral ('Rp 200,500,000');
  console.log('nilai integer ke dua adalah ', nilaiKe2.value());
```


#### [moment.js](https://momentjs.com/) parse, validate, manipulate & display date and time.

add inside `body` tag on below in our html file.
`<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>`

on js file

##### [Displaying](https://momentjs.com/docs/#/displaying/format/)

```js

  //example
  let today = moment();
  console.log('today is ', today.format('dddd, MMMM Do YYYY'))
```

#### [Manipulating](https://momentjs.com/docs/#/manipulating/add/)

```js
  console.log('next week is ',moment().add(1, 'weeks').format('DD MMMM YYYY'))
```

#### [Displaying Time from now](https://momentjs.com/docs/#/displaying/fromnow/)

```js
console.log(moment([2013, 1, 29]).fromNow());
```