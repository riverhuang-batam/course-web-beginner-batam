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
import React from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';

//COMPONENTS
import PostsItem from './organism/PostsItem';
import Profile from './organism/Profile';
// pls fill in

export default () => {
    return (
        <HashRouter>
            <div>
                <header>
                    <NavLink to="/"> Home</NavLink>{` `}
                    <NavLInk to="/posts">Posts</Navlink>{` `}
                    <NavLink to="/profile">Profile</NavLink>{` `}
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostsItem}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/posts" component={Posts}/>
                    <Route exact path="/" component={App}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </HashRouter>
    )
}

```

