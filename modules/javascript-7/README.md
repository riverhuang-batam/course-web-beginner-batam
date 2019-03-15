# JavaScript 7

---

## scope & `this` keyword

### In JavaScript there are two types of scope:

* Local scope
* Global scope

Local scope example:
```js
// code here can NOT use carName
console.log('carName 1', carName)
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log('carName 2', carName)
}
// code here can NOT use carName
console.log('carName 3', carName)
myFunction();
console.log('carName 4', carName)
```


Global scole example:
```js
let carName = "Volvo";
// code here can use carName
console.log(`carName 1 is ${carName}`)
function myFunction() {
    // code here can also use carName 
    console.log(`carName 2 is ${carName}`)
}
console.log(`carName 3 is ${carName}`)
```

If you assign a value to a variable that has not been declared, it will automatically become a global variable:
```js
myFunction();
// code here can use carName 
console.log(`carName 1 is ${carName}`)

function myFunction() {
    carName = "Volvo";
}

console.log(`carName 2 is ${carName}`)
```

### `This` keyword in JavaScript

In a function definition, this refers to the "owner" of the function.

If we run this code inside browser, this refer to window Object.

```js
function myFunction() {
    debugger;
    return this;
}
```

In this example this refer to a person object.

```js
let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        debugger;
        return this.firstName + " " + this.lastName;
    }
};
```

### Object Binding Using bind()

```js
let person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}

person1.fullName.bind(person2)()
```

---