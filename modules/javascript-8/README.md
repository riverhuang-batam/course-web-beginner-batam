# JavaScript 10 (ES 6 / ES 2015)

---

## Classes

```js

class Circle extends Shape {
  constructor (radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * 2 * this.radius
  }
}

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
 }

 // or 

 const functionName2 = (argument1) => {
   // do something here
 }

// can become like below if has only one argument
const functionName3 = argument1 => {
   // do something here
 }

// can become like below if only one statement, this will return value
const functionName4 = argument1 => `hi i'm argument1 with value ${argument1}`;
// it can be intrepeted like this
const functionName5 = argument1 => return `hi i'm argument1 with value ${argument1}`;
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
  console.log(name, live) // Budi Batam
```

### can be used on parameter matching

```js
  const simpleFunction = ({name, gender}) => `hi my name is ${name}`
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
  name: 'Tider Hunter'
};

console.log(person2);   // { name: "Tide Hunter", class: "Support", level: 21}
```

---

## Objects

```js
module.exports = { hello, bye }
// same as : module.exports = { hello: hello, bye: bye }
```

```js
const App = {
  start() {
    console.log('running')
  }
}
// same as : App = { start : function () {...} }
```

---

## Modules

### Imports

```js
import 'helpers'

import Express from 'express'
// same as: const Express = require('...').default || require('...')

import { indent } from 'helpers'
// same as: const indent = require('...').indent

import * as Helpers from 'helpers'
// same as: const helpers = require('...')

import { indentSpaces as indent } from 'helpers'
// same as: const indent = require('...').indentSpace
```

### Exports

```js
export default function () { ... }
// same as: module.exports.default = ...

eport function myMethod() { ... }
// same as: module.export.mymethod = ...

expot const pi = 3.14159;
// same as: module.exports.pi = ...
```