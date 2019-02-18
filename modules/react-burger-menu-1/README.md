# React Burger Menu 1

---

## Introduction

Sidebar component with a collection of effects & styles using CSS transition

---

## Installation

`npm install react-burger-menu --save`

---

## Usage

```js
import { slide as Menu } from 'react-burger-menu'
```

## Example

```js
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    .
    .
    .
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
```