# Practice 4

---

continue with reactstrap2 lesson before and create also with stories

### 1. [Alert](https://reactstrap.github.io/components/alerts/)

```js
import React from 'react';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const OrganismsAlert = (props) => {
    return (
        <div>
            <Alert color="primary">
                this is a primary alert - check it out!
            </Alert>
        </div>
    )
}
// try add with color of secondar, success, danger, warning, info, light, dark
```

---


### 2. [Button DropDown](https://reactstrap.github.io/components/button-dropdown/)

```js
import React, { Component } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class OrganismsButtonDropdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

```

### 3. [Button Group](https://reactstrap.github.io/components/button-group/)

```js
import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class MoleculesButtonGroup extends React.Component {
    render() {
        return (
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        )
    }
}
```

---

### 4. [Form](https://reactstrap.github.io/components/form/)

```js

import React, { Component } from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';

export default class OrganismsForm extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="select">Select</Label>
                    <Input type="select" name="select" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}

```

### 5. [Form Grid](https://reactstrap.github.io/components/form/)

```js

import React, { Component } from 'react';
import {Col, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

export default class Organisms extends Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" id="description" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="photo" sm={2}>File Photo</Label>
                    <Col sm={10}>
                        <Input type="file" name="photo" id="photo"/>
                        <FormText color="muted">
                            this is some placeholder block-level help text for the above input. it's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

```

### 6. [Modal](https://reactstrap.github.io/components/modals/)

```js
import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

export default class OrganismsModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    }

    this.toggle = this.toggle.bind(this);

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        this is content we can put in
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}


```