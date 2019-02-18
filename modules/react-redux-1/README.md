# React Redux 1

---

## Introduction

official redux for react.

---

## Installation

`npm install --save redux react-redux

---

## Usage

### Provider

Makes Redux store available to the rest of our app.

```js
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import rootReducer from './reducers';
import App from './components/pages/App';

const store = createStore(rootReducer)

render (
    <Provider store={store}>
        <App />
    </Provider>
)


```

### Connect

To connect our component to the store

```js
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actionCreators';

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```