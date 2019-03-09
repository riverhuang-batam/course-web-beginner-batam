import React, { Component } from 'react';
import axios from 'axios';

export default class ShowList extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:3000/cart`)
        .then( res => {
            this.setState({
                list: res.data
            })
        })
        .catch (error => {
            console.log(error);
            alert('no data found');
        })
    }

    render() {
        console.log(this.state.list);
        const Lists = this.state.list.map(item => {
            return (<li key={item.id}>{item.todo} <button>Edit</button><button>Del</button></li>)
        })

        return (
            <div>
                <ol>
                    {Lists}
                </ol>
            </div>
        )
    }
}