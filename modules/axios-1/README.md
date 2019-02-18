# Axios 1

---

## Introduction

Promise based HTTP client for the browser

---

## Installation

`npm install axios --save`

---

## Usage

usually being used on inside `componentDidMount` method
```js
//for example

componentDidMount() {
    axios.get('localhost:3004/posts')
    .then(res => {
        //NEED TO BE TESTED
        //handle success
        this.setState({
            posts: res.data
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function (){
        // always executed
    })
}

```