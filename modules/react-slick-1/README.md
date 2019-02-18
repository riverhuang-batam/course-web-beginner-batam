# react-slick 1

---

## Introduction

Is React Carousel

---

## Installation

`npm nstall react-slick slick-carousel --save`

---

## Usage

```js

import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSider extends Component {
render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    );
  }
}
```
