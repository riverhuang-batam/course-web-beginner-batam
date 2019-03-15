# React Router 1

---

## What's for

Declarative routing, easy to maintain what module to be load based URL.

---

## Installation

`npm install --save react-router-dom`

---

## How to use

```js
// usually in App.js or index.js
// for practice we will build on storyboad in organisms folder
// create stories.js too

import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Switch} from 'react-router-dom';

//include components
import SimpleCard from './../src/components/molecules/SimpleCard';
import Form from './../src/components/organisms/Form';
import Modal from './../src/components/organisms/Modal';
import Card from './../src/components/molecules/Card';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
              <header>
                  <NavLink to="/simple_card"> Simple Card</NavLink>{` `}
                  <NavLink to="/form">Form</NavLink>{` `}
                  <NavLink to="/modal">Modal</NavLink>{` `}
                  <NavLink to="/nothing">other is Card</NavLink>
              </header>
              <Switch>
                  <Route exact path="/simple_card" component={SimpleCard}/>
                  <Route path="/form" component={Form}/>
                  <Route path="/modal" component={Modal}/>
                  <Route path="*" component={Card}/>
              </Switch>
          </div>
      </HashRouter>
    )
  }
}

export default App;

```