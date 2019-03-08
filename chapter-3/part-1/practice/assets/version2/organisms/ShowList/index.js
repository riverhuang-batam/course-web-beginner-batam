import React, { Component } from 'react';

export default class ShowList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    
    componentDidMount() {
        this.setState({
            list: [{
                id: 1,
                todo: "Buy T-Shirt"
            }, {
                id: 2,
                todo: "Buy Read Bull"
            }, {
                id: 3,
                todo: "Do Laundry"
            }]
        })
    }

    render() {

        const Lists = this.state.list.map(item => {
            return (<li>{item.todo}</li>)
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