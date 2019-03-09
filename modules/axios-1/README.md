# Axios 1


---

## Introduction

Promise based HTTP client for the browser. If access from different backend / API, use prefix of `http://` on URL. because have CORS issue

---

## Installation

`npm install axios --save`

---

## Syntax

### POST

```js
axios.post('http://localhost:3000/user', {
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
axios.get('http://localhost:3000/user',
.then( response => {
    // ...
})

axios.get(`http://localhost:3000/user/${id}`)
.then( response => {
    // ...
})


axios.get('http://localhost:3000/user', {
    params: {
        id: 111
    }
})
.then( response => {
    // ...
})
// same as but we don't recommended
axios.get('http://localhost:3000/user?id=111')
```

### PATCH

```js
axios.patch('http://localhost:3000/user', {
    firstName: 'Emilia'
})
```

### PUT

```js
axios.put(`http://localhost:3000/user/${id}`,{
    firstName: 'nanoha',
    lastName: 'takanashi'
})
```

### DELETE

```js
axios.delete(`http://localhost:3000/user/${id}`)
```

---

## Example Usage

usually being used on inside `componentDidMount` method

```js
//for example
import axios from 'axios';
///....

componentDidMount() {
    axios.get('http://localhost:3004/carts')
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