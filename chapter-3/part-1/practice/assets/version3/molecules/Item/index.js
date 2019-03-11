import React, { Component } from 'react';
import axios from 'axios';

export default class Item extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: props && props.data
        }
    }

    onEdit = () => {
        const { data }  = this.props; 
        const updateValue = window.prompt("change todo", data.todo);
        if (updateValue != null && data.todo != updateValue){
            axios.patch(`http://localhost:3000/cart/${data.id}`, {
                todo: updateValue
            })
            .then( ({data}) => {
                this.setState({data})
                alert('success to changed')
            })
            .catch( error => {
                console.log(error);
                alert('have problem when save update')
            })
        }
    }

    onDelete = () => {
        const { data } = this.props;
        const confirm = window.confirm('are you want to delete this?');
        if (confirm) {
            axios.delete(`http://localhost:3000/cart/${data.id}`)
            .then (res => {
                alert('success to delete');
            })
            .catch( error => {
                console.log(error);
                alert('have problem when delete data');
            })
        }

        
    }

    render() {
        const { data } = this.state;
        return (
            <li>
                {data.todo}
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.onDelete}>Del</button>
            </li>
        )
    }
}