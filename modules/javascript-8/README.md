# JavaScript 8 (ES 6 / ES 2015)

---

## Classes

```js
class Circle {
  constructor (radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * 2 * this.radius
  }
}

let circle = new Circle(10);
let totalArea = circle.getArea();
console.log(`this totalArea is ${totalArea}`)

```

---

## Template Strings (backtick)

```js
let name = 'Budi';
let sayHi = `hi my name is ${name}`;
console.log(sayHi);
```

---

## Fat Arrow Functions

```js
 const functionName1 = () => {
   // do something here
   console.log('no parameter');
 }
 functionName1();

 // or 

 const functionName2 = (argument1) => {
   // do something here
   console.log(argument1)
 }
 functionName2('show message');

// can become like below if has only one argument
const functionName3 = argument1 => {
   // do something here
   console.log(argument1)
 }
let sentences = functionName3('i\'m wanna be programmer');
console.log(`this sentences is ${sentences}`);

// can become like below if only one statement, this will return value
const functionName4 = argument1 => `hi i'm argument1 with value ${argument1}`;
let newSentences = functionName4('batam')
console.log(`functionName4 is ${newSentences}`)
```

---

## Destructuring

### object matching 

```js
  const object = {
    name: 'Budi',
    gender: 'Male',
    live: 'Batam'
  }
  console.log(object);

  const { name, live } = object;
  // its same like 
  // const name = object.name
  // const live = boejct.live
  console.log(name, live) // Budi Batam
```

### can be used on parameter matching

```js
  const simpleFunction = ({ name, gender }) => `hi my name is ${name} with gender ${gender}`
  const greeting = simpleFunction(object)
  console.log(greeting)
```

### object destructuring

```js
  const object = {
    name: 'Budi',
    gender: 'Male',
    live: 'Batam'
  }
  const { name, ...newObject } = object;
  console.log( name );        // "Budi"
  console.log( newObject );   // { gender: "male", live: "Batam" }
```

---

## Spread

The Object spread operator lets you build new objects from other objects

```js
const person1 = {
  name: 'Omni Knight',
  class: 'Support',
  level: 21
};

const person2 = {
  ...person1,
  name: 'Tide Hunter'
};
console.log(`person1 is`, person1)
console.log(`person2 is`, person2)
```

---

## Objects

```js
const helo = "koni chiwa";
const by = "ja ne";
module.exports = { hello, bye }
// same as : module.exports = { hello: hello, bye: bye }
```

```js
const App = {
  start() {
    console.log('running')
  },
  end() {
    console.log('stop')
  }
}

App.start();

const App2 = {
  start: () => {
    console.log('running')
  },
  end: () => {
    console.log('stop')
  }
}

App2.end();
```

---

## Modules Export & Import

### Multiple named exports

```js
// lib.js
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return sqrt(square(x) + square(y));
}



// -- main.js ---
import { square, diag } from 'lib';
console.log(square(11));

// or

import * as lib from 'lib';
console.log(lib.square(11));
```

---

### Single default export

```js

// myFunct.js
export default function(){}   // no semicolon!

// main1.js
import myFunct from 'myFunc';
myFunct()



// or a class
// MyClass.js
export default class { ... } // no semicolon!

//main2.js
import MyClass from 'MyClass';
const inst = new MyClass;

```

### Default & multiple export

```js

// DefaultMultipleExport.js
export default function foo (){}
export function bar (){ }


// DefaultMultipleImport.js
import foo, { bar } from './DefaultMultipleExport'
```