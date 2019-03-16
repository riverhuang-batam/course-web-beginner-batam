# react-datepicker 1

---

## Introduction

create awesome datepicker component for React

---

## Installation

`npm install react-datepicker --save`

---

## Usage

```js
import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class ReactDatePicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
        }
    }

    handleChange = date => {
        this.setDate({
            startDate: date
        })
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        )
    }
}
```