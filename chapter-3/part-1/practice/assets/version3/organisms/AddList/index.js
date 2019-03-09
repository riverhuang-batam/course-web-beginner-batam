import React, { Component } from 'react';
import axios from 'axios';

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
        axios.post(`http://localhost:3000/cart`, this.state)
            .then( res => {
                console.log(res);
                this.setState({todo: ''})
            })
            .catch ( error => {
                console.log(error);
            })
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