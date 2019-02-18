# Redux 1

---

## Introduction

management all states in one container.

---

## Installation

`npm install --save redux`

---

## Basic Knowledge

### Actions

Are payloads of inromation that send data from our app to our store.

```js
const ADD_TODO = 'ADD_TODO'

{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}
```

#### Action Creators

Is the create action.

```js
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
```

```js
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

```

### Reducers

Specify how the app's state changes in response to actions sent to the store.

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
```

### Store

Is the object that brings them together.

```js
import { createStore } from 'redux'
import reducers from './reducers'
const store = createStore(reducers)
```