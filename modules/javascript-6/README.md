# JavaScript 6

## JavaScript Functions

Function is a feature of JavaScript that allow us to **do something** whenever the function is **called**

---

## How to use

### arrow function

Syntax:

`const x = () => {}`

```js
//example 1
let names = ["Budi", "Joni", "Tono", "Jaka"];
let modifiedName = names.map(name => "Mr." + name);
console.log('modifiedName value are', modifiedName)


const funct = name => "Mrs." + name;
modifiedName = names.map(funct);
console.log('second modifiedName value are', modifiedName)
```

### Function arguments and default parameters

```js
const myFunction = (totalPrice, name) => {
  const totalTax = totalPrice * 0.1;
  const detailTax = `name: ${name}, tax:${totalTax}`;
  
  return detailTax;
}

myFunction(10000, 'Shirt');
```

---

## `let` vs `const` in function

### **let**

Can be updated but not redeclared.

```js
let greeting = "say Hi";
greeting = "say Hello instead";
```

Block scoped.

```js
{
  let hello = "say Hello instead";
  console.log(hello); //"say Hello instead"
}
console.log(hello); // error : hello is not defined
```

### **const**

`const` declarations are block scoped, cannot be updated or re-declared.

```js
const greeting = "say Hi";
greeting = "hi too";  // error: Assignment to constant variable
const greeting = "say Hello instead"; //error : Identifier 'greeting' has already been declared
```
---