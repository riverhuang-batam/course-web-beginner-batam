# JavaScript 2

---

## JavaScript Intro & Data Types

In JavaScript, there are several data types:

- `String`: is a text or set of characters
- `Number`: is a numeric types
- `Boolean`: is a data types that represents one or two value: true or false.
- `Array`: is a data type that used to store multiple values in a single variable.
- `Object` with `key` & `value`: is a data type that used to store a information of multiple values like a real life object
- `JSON`: is a is a lightweight data-interchange format. Using JavaScript `Object` Notation format

Examples:

```js
// String
let a = "this is a string";
let b = "another string";
let c = `${a} and ${b}`; // result: this is a string and another string

// Number
var d = 2;
var d = 2.24;
var d = 2 + 2; // result: 4
var d = 1 + 2 / 4; // result: 1.5

// Boolean
let e = true;

// Array
let f = ["a", 1, true, undefined, null];
f[0]; // result: "a"
f[1]; // result: 1
f[4]; // result: null
f.length; // result: 5

// Object
let p = {
  number: 1,
  string: "This is String",
  boolean: true,
  undefined: undefined,
  null: null,
  array: ["a", 1, true, undefined, null]
};

// This is a comment line

/*
This is a
multiple comment line
*/
```

---

## JavaScript Variable

Variable is a way to store a value that can be used later.

There are three ways to declare a variable.

Examples:

```js
var x = ""; // can be changed later

let y = ""; // can be changed later

const z = ""; // cannot be changed later
```

---

## JavaScript Symbols

### Arithmetic Operator

Arithmetic operators are used to perform arithmetic between variables and/or values.

Examples:

```js
let a = 2 + 2;

let b = 3 - 2;

let c = 3 * 3;

let d = 4 / 2;

let e = 7 % 2; // result:1

let f = 3 * 2 + 1; // result:7
```

### Comparison

Comparison operator is used to compare between two value and generate result between true or false.

Examples:

```js
var number = 7

var result = (number == 7) // result: true
var result = (number == 99) // result: false
var result = (number == "7") // result:t rue

var result = (number === 7) // result: true
var result = (number === "7") // result: false

var result = !true // result: false

var result = (number != 7) // result: false
var result = (number != 99) // result: true
var result = (number != "7") // result: false

var result = (number !== 7) // result: true
var result = (number !== "7") // result: false
var
var result = (number > 7)// result: false
var result = (number > 6)// result: true

var result = (number >= 7)// result: true
var result = (number >= 6)// result: true

var result = (number < 7)// result: false
var result = (number < 6)// result: false

var result = (number <= 7)// result: true
var result = (number <= 6)// result: false

var result = (true && false)// result: false
var result = (true && true)// result: true

var result = (true || false)// result: true
var result = (true || true)// result: true

var result = undefined || "string"// result: String
```

---

## JavaScript Built-In Objects & Methods

JavaScript has **built in** methods to manipulate object in variables, here is the example...

Examples:

```js
// Math
var result = Math.PI; // result: 3.141592653589793
var result = Math.round(4.7); // result: 5
var result = Math.round(4.4); // result: 4
```

```js
// Date
var result = new Date(); // result: [current date]

var result = new Date("October 13, 2018 11:13:00"); // result: Tue Mar 27 2018 11:13:00 GMT+0700 (WIB)

var year = result.getFullYear(); //year: 2018
```

```js
// Array
var alphabet = ["a", "b", "c", "d"];

var result = alphabet.toString(); // result: a,b,c,d
var result = alphabet.join("_"); // result: a_b_c_d
var result = alphabet.length(); // result: 5
var result = alphabet.includes("a"); // result: true
var result = alphabet.push("e"); // result: 5, with alphabet being ["a", "b", "c", "d", "e"]
var result = alphabet.pop(); // result: e, with alphabet being ["a", "b", "c", "d"] again
```

## JavaScript Date Methods

In JavaScript, Date object is a bit special. It has built in methods to manipulate Date object, and here is the example...

| Method            | Description                                       |
| ----------------- | :------------------------------------------------ |
| getDate()         | Get the day as a number (`1`-`31`)                |
| getDay()          | Get the weekday as a number (`0`-`6`)             |
| getFullYear()     | Get the four digit year (`yyyy`)                  |
| getHours()        | Get the hour (`0`-`23`)                           |
| getMilliseconds() | Get the milliseconds (`0`-`999`)                  |
| getMinutes()      | Get the minutes (`0`-`59`)                        |
| getMonth()        | Get the month (`0`-`11`)                          |
| getSeconds()      | Get the seconds (`0`-`59`)                        |
| getTime()         | Get the time (milliseconds since January 1, 1970) |

---

## References

- Guide
  - [JavaScript in 14 minutes](https://jgthms.com/javascript-in-14-minutes)

- Tutorial
  - [Javascript Tutorial on W3Schools](https://www.w3schools.com/js/default.asp)
  - [Javascript Tutorial on TutorialsPoint](https://www.tutorialspoint.com/javascript/index.htm)
