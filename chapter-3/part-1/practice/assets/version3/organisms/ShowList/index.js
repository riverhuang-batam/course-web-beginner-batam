import React, { Component } from 'react';
import axios from 'axios';

import Item from './../../molecules/Item';


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
        const Lists = this.state.list.map(item => {
            return (
                <Item key={item.id} data={item}/>
            )
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