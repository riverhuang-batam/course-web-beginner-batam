# React Props State 1

---

## What's Props

1. Is shorthand for `properties`. 
2. Props data is cannot be changed. 
3. Usually data gets from parent component. 
4. The only way to change props is changed from parent component.

---

## What's State

1. Places data can be changed.
2. If state data changed, will call render function to update rendering elements.
3. State can sent data to children components by setting props to the components.

---

## Example State & Props

```js
    // ./molecules/Card.js
    // using State
 
    import React, { Component } from 'react';
    import Message from './../atoms/Message';
    
    class Card extends Component {
        state = {
            date: new Date()
        }

        componentDidMount() {
            window.setInterval( () => {
                this.setState({
                    date: new Date()
                })
            }, 1000)
        }

        render() {
            return (
                <div>
                    <Message date={this.state.date}/>
                    <Message>
                        {`today date : ${this.state.date}`}
                    </Message>
                    <Message date={`second date : ${this.state.date}`}/>
                </div>
            )
        }
    }

    export default Card;
```

```js
    // atoms/Message.js
    // using props

    import React from 'react';

    export default (props) => {
        const message = props && ( props.children || props.date || '')
        return (
            <div>{${message}}</div>
        )
    }
