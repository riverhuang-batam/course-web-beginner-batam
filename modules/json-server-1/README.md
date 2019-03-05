# [json-server](https://www.npmjs.com/package/json-server) 1

---

## Introduction

* Full fake REST API with zero coding
* For front-end developers who need a quick back-end for prototyping and mocking.

---

## Installation

`npm install -g json-server`

---

## Usage

1. create `db.json` file with content for example
```js
{
    "carts":[{
        "id": 1,
        "product": {
            "id": 10023,
            "name": "T-Shirt",
            "price": 20000,
            "size": "xxl"
        },
        "qty": 5
    }, {
        "id": 2,
        "product": {
            "id": 10024,
            "name": "Battery",
            "price": 5000,
            "size": "AAA"
        }
    }]
}
```

2. to start, call `json-server --watch db.json` if can't because port already used, use this `json-server --watch db.json --port 3004` we use port 3004 to start json-server
   
3. open your browser with port 3004. `localhost:3004` with url `carts`. and see what it will shows to us

