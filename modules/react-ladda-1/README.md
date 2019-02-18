# React Ladda 1

---

## Introduction

React wrapper for [Ladda](https://lab.hakim.se/ladda/) buttons

---

## Installation

`npm install react-ladda --save`

---

## Usage & example

```js
import React, { Component } from 'react';

import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

class App extends Component {

  state = { loading: false };

  toggle() {
    this.setState({
      loading: !this.state.loading,
      progress: 0.5,
    });
  }

  render() {
    return (
      <LaddaButton
        loading={this.state.loading}
        onClick={this.toggle}
        data-color="#eee"
        data-size={XL}
        data-style={SLIDE_UP}
        data-spinner-size={30}
        data-spinner-color="#ddd"
        data-spinner-lines={12}
      >
        Click Here!
      </LaddaButton>
    );
  }
};

ReactDOM.render(<App />, document.body);
```