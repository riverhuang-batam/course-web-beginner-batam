import React, { Component } from 'react';

export default class AddList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    onInputChanged = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    onAddList = () => {
        this.setState({todo: ''})
    }

    render(){
        return (
            <div>
                <input onChange={this.onInputChanged} name="todo" value={this.state.todo}/>
                <button onClick={this.onAddList}>Add</button>
            </div>
        )
    }
}