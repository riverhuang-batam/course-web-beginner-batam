# React Lifecycle 1

---

## Introduction

metods are called automaticly triggered by `mounting`, `updating` and `unmounting`

---

### List of react lifecycle methods based on what come first

#### Mounting

1. `constructor`
    is first things method will run.    

    example
    ```js
    class Clock extends React.Component {
        constructor(props){
            super(props);
            //some code
        }
    }

    let clock = new Clock(
        {
            name:"digital clock",
            value: "2018-12-01"
        }
    )
    ```

2. `render`
    method for give output as HTML will be added on DOM/ other components.

3. `componentDidMount`
   this method will run after render, after already print HTML. usually used on fetching data.

   example
    ```js
    class Clock extends React.Component {
        componentDidMount() {
            window.setInterval ( () => {
                this.setState({
                    date: new Date()
                })
            }, 1000)
        }
    }
    ```

#### Updating

1. `componentDidUpdate`
    this method will be run when state data changes and after `render` function

#### Unmounting

5. `componentWillUnmount`
    this method will be run before DOM is to be removed. usually being used to prevent memory leak or slow performance