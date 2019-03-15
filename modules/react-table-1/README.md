# React Table 1

---

## Introduction

Building fast & extendable table & datagrid for React

---

## Installation

`npm install react-table --save`

---

## Usage

```js
import { ReactTable } from 'react-table'
import 'react-table/react-table.css'
```

## Example

create on molecules folder & also create stories.js.
the name of folder is `ReactTable` for now.
if class name is same with import name. Change it.

```js
import React, {Component} from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

export default class ComponentReactTable extends Component {
    render() {
        const data = [
            {
                name: 'Tanner Linsley',
                age: 26,
                friend: {
                    name: 'Jason Maurer',
                    age: 23
                }
            },
            {
                name: 'nino',
                age: 21,
                friend: {
                    name: 'Yotsuba',
                    age:21
                }
            }
        ]

        const columns = [
            {
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!
            }, {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
            }
        ]

        return <ReactTable data={data} columns={columns}/>
    }
```