# json-server 1

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
    posts: [{
        "id": 1,
        "content": "i'm first"
    },{
        "id": 2,
        "content": "i'm second"
    }]
}
```

2. to start, call `json-server --watch db.json`