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
 functionName2();

// can become like below if has only one argument
const functionName3 = argument1 => {
   // do something here
   console.log(argument1)
 }
 functionName3();

// can become like below if only one statement, this will return value
const functionName4 = argument1 => `hi i'm argument1 with value ${argument1}`;
console.log(`functionName4 is ${functionName4}`)
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

const App2 = {
  start: () => {
    console.log('running')
  },
  end: () => {
    console.log('stop)
  }
}
```

---

## Modules

### Imports

```js
import 'helpers'

import Express from 'express'
// same as: const Express = require('express').default || require('express')

import { indent } from 'helpers'
// same as: const indent = require('helpers').indent

import * as Helpers from 'helpers'
// same as: const helpers = require('helpers')

import { indentSpaces as indent } from 'helpers'
// same as: const indent = require('helpers').indentSpace
```

### Exports

```js
export default function () { ... }
// same as: module.exports.default = ...

export function myMethod() { ... }
// same as: module.exports.mymethod = ...

export const pi = 3.14159;
// same as: module.exports.pi = ...
```