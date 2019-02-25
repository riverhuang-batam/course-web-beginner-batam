# JavaScript 4

## Built-in JavaScript Array Iteration Methods

Some of javascript array methods to do array operation or manipulation

| Array Method      | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| `filter`          | Creates a new array with every element in an array that pass a test              |
| `map`             | Creates a new array with the result of calling a function for each array element |
| `find`            | Returns the value of the first element in an array that pass a test              |
| `forEach`         | Calls a function for each array element                                          |

### `filter`

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "happy"
];

let longWords = words.filter(word => word.length > 6);
console.log('long words are : ', longWords);
// longWords: ["exuberant", "destruction", "present"]
```

### `map`

```js
let array1 = [1, 4, 9, 16];

// pass a function to map
const newArray = array1.map(x => x * 2);
// it's same with
// array1.map( (x) => x * 2 );
// array1.map( (x) => { return x * 2 } );
// array1.map( function (x) { return x * 2 } );

console.log('new array are : ', newArray)
// map1: Array [2, 8, 18, 32]
```

### `find`

```js
let array2 = [5, 12, 8, 130, 44];
let found = array2.find ( element => element > 10 );
console.log('find array where bigger than 10 is : ', found )
// found: 12
```

### `forEach`

```js
let array3 = ["a", "b", "c"];
let text = "";

array3.forEach( element => {
  text += element + ",";
});
console.log('text is : ', text);
// text: a,b,c,
```

