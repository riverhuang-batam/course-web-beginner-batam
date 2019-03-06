# Axios 1


---

## Introduction

Promise based HTTP client for the browser

---

## Installation

`npm install axios --save`

---

## Syntax

### POST

```js
axios.post('/user', {
    firstName: 'Miya',
    lastName: 'Yuki'
})
.then( response => {
    console.log(response);
})
.catch( error => {
    console.log(error);
})
```

### GET

```js
axios.get('/user',)
.then( response => {
    // ...
})

axios.get(`/user/${id}`,)
.then( response => {
    // ...
})


axios.get('/user', {
    params: {
        id: 111
    }
})
.then( response => {
    // ...
})
// same as but we don't recommended
axios.get('/user?id=111')
```

### PATCH

```js
axios.patch('/user', {
    firstName: 'Emilia'
})
```

### PUT

```js
axios.put(`/user/${id}`,{
    firstName: 'nanoha',
    lastName: 'takanashi'
})
```

### DELETE

```js
axios.delete(`/user/${id}`)
```

---

## Example Usage

usually being used on inside `componentDidMount` method

```js
//for example
import axios from 'axios';
///....

componentDidMount() {
    axios.get('localhost:3004/carts')
    .then(res => {
        this.setState({
            posts: res.data
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){
        // always executed
    })
}
```