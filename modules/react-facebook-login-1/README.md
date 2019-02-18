# react-facebook-login 1

---

## Introduction

Used for login with facebook

---

## Installation

`npm nstall react-facebook-login --save`

---

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId=OUR-API-ID-FROM-FACEBOOK
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
);
```