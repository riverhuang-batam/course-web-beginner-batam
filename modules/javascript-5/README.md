# Javascript 5

## String Built-In Functions

```javascript
//charAt Example
let stringIBBatam = "Impact Byte Batam";
let resultChartAt0 = stringIBBatam.charAt(0);
console.log('resultChartAt0 : ', resultChartAt0)
resultChartAt0 = stringIBBatam.charAt(1);
console.log('resultChartAt0 : ', resultChartAt0)
resultChartAt0 = stringIBBatam.charAt(6);

//length Example
let resultLength = stringIBBatam.length;
console.log('resultLength is ', resultLength)

//toUpperCase example
let resultToUpperCase = stringIBBatam.toUpperCase();
console.log('resultToUpperCase is :', resultToUpperCase)

//toLowerCase example
let resultToLowerCase = stringIBBatam.toLowerCase();
console.log('resultToLowerCase is :', resultToLowerCase)

//split example
let resultSplit = stringIBBatam.split(" ");
console.log('resultSplit is ', resultSplit);
resultSplit = stringIBBatam.split(" ", 2);
console.log('second resultSplit is ', resultSplit);

//replace example
let resultReplace = stringIBBatam.replace("Batam", "Kepulauan Riau");
console.log('resultReplace is ', resultReplace)

//substr example
let resultSubstr = stringIBBatam.substr(0, 6);
console.log('resultSubstr is ', resultSubstr);
resultSubstr = stringIBBatam.substr(0, 3);
console.log('second resultSubstr is ', resultSubstr);
```

## Array Methods

```javascript
//length Example
let iBBatamArray = ["Impact", "Byte", "Batam"];
let resultArrayLength = iBBatamArray.length;
console.log(`resultArrayLength is ${resultArrayLength}`)

//indexOf Example
let resultArrayIndexOf = iBBatamArray.indexOf("Byte");
console.log(`resultArrayIndexOf is ${resultArrayIndexOf}`)
    resultArrayIndexOf = iBBatamArray.indexOf("Batam");
console.log(`second resultArrayIndexOf is ${resultArrayIndexOf}`)

//push Example
iBBatamArray.push("Web");
console.log ('result push into array is', iBBatamArray);


//pop Example
iBBatamArray.pop();
console.log ('result pop from array is', iBBatamArray);

//join Example
let resultArrayJoin = iBBatamArray.join("--");
console.log ('result join array is', resultArrayJoin);

//slice Example
let resultArraySlice = iBBatamArray.slice(1);
console.log(`resultArraySlice is `, resultArraySlice)
resultArraySlice = iBBatamArray.slice(1, 2);
console.log(`second resultArraySlice is `, resultArraySlice)

//sort Example
iBBatamArray.sort();
console.log(`iBBatamArray.sort() is `, iBBatamArray)

//reverse Example
iBBatamArray.reverse();
console.log(`iBBatamArray.reverse() is `, iBBatamArray)
```

## Math Methods

```javascript
//random Example
let resultMathRandom = Math.random();
console.log(`result of resultMathRandom is ${resultMathRandom}`);

//ceil Example
let resultMathCeil = Math.ceil(2.5);
console.log(`result of resultMathCeil is ${resultMathCeil}`);
resultMathCeil = Math.ceil(2.1);
console.log(`second result of resultMathCeil is ${resultMathCeil}`);

//floor Example
let resultMathFloor = Math.floor(1.9);
console.log(`result of resultMathFloor is ${resultMathFloor}`);

//rounding value example
let resultMathFloorRound = Math.round(2.4);
console.log(`result of resultMathFloorRound is ${resultMathFloorRound}`)
resultMathFloorRound = Math.round(2.5);
console.log(`second result of resultMathFloorRound is ${resultMathFloorRound}`)
```

## Object Methods

```javascript
//assign example
let object1 = { fname: "John" };
let object2 = { lname: "Doe" };
let object3 = { age: 30 };

let object4 = {...object1, ...object2, ...object3}
console.log(`object4 value is`, object4)

let object5 = { object1, object2, object3}
console.log(`object5 value is`, object5)

let resultObjectKeys = Object.keys(object4);
console.log(`resultObjectKeys is`, resultObjectKeys)
```

## Timing Methods

```javascript
//setInterval example
function firstFunction() {
  let count = 0;
  setInterval(() => {
    count++;
    alert(`this is setInterval & already show in  ${count} times`);
  }, 3000);
}
firstFunction();

function secondFunction() {
  setTimeout( () => {
    alert("this is settimeout");
  }, 3000)
}
secondFunction();
```