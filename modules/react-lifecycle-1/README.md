# React Lifecycle 1

---

## Introduction

metods are called automaticly triggered by `mounting`, `updating` and `unmounting`

---

### List of react lifecycle methods based on what come first

#### Mounting

1. `constructor`
    is first things method will run.

2. `render`
    method for give output as HTML will be added on DOM/ other components.

3. `componentDidMount`
   this method will be run after render, after already print HTML. usually used on fetch.

#### Updating

4. `componentDidUpdate`
    this method will be run when state data changes.

#### Unmounting

5. `componentWillUnmount`
    this method will be run before HTML to be removed.