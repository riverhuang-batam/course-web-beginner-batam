import React, { Component } from 'react';

export default class ShowList extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Buy T-Shirt <button>Edit</button><button>Del</button>
                    </li>
                    <li>
                        Buy Read Bull <button>Edit</button><button>Del</button>
                    </li>
                    <li>
                        Do Laundry <button>Edit</button><button>Del</button>
                    </li>
                </ol>
            </div>
        )
    }
}