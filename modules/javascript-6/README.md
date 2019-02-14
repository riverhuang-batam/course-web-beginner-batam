# JavaScript 6

## JavaScript Functions

Function is a feature of JavaScript that allow us to **do something** whenever the function is **called**

---

## How to use

### regular `function` keyword

Syntax:

`function name() {}`

```js
function myFunction(totalPrice, name) {
  totalTax = totalPrice * 0.1;

  detailTax = `name: ${name}, tax:${totalTax}`;
  return detailTax;
}
```

### variable function

Syntax:

`const x = function() {}`

```js
const myFunction = function(totalPrice, name) {
  totalTax = total_price * 0.1;

  detailTax = `name: ${name}, tax:${totalTax}`;
  return detailTax;
};
```

### arrow function

Syntax:

`const x = () => {}`

```js
//example 1
var names = ["Budi", "Joni", "Tono", "Jaka"];

var modifiedName = names.map(name => "Mr." + name);

// with function inside var
var funct = name => "Mr." + name;

var modifiedName = names.map(funct);
```

### Function arguments and default parameters

Syntax:

`function (input = "default") {}`

```js
function myFunction(totalPrice, name) {
  totalTax = totalPrice * 0.1;

  detailTax = `name: ${name}, tax:${totalTax}`;
  return detailTax; // The function returns the product of p1 and p2
}
```

---

## `var` vs `let` vs `const` in function

### **var**

Variables can be re-declared and updated.

```js
var greeter = "hey hi";
var greeter = "say Hello instead";
```

It is available and can be accessed only within that function.

```js
function newFunction() {
  var hello = "hello";
  console.log(hello)
}
newFunction();
console.log(hello); // error: hello is not defined
```

Declare variable on the top, before execution.

```js
console.log(greeter); // print undefined
var greeter = "say hello";
console.log(greeter);
```

### **let**

Can be updated but not redeclared.

```js
let greeting = "say Hi";
greeting = "say Hello instead";
```

Block scoped.

```js
if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); //"say Hello instead"
}
console.log(hello); // hello is not defined
```

### **const**

`const` declarations are block scoped, cannot be updated or re-declared.

```js
const greeting = "say Hi";
const greeting = "say Hello instead"; //error : Identifier 'greeting' has already been declared
```

---