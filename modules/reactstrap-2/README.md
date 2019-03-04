# Reactstrap 2

--- 

## Before start

* try read again on [reactstrap-1](./../reactstrap-1/README.md) about installation.
* below these code create inside folder `Molecules` with named respectively. also create `stories` too

---

## [Layout](https://reactstrap.github.io/components/layout/)

```js
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>if only one Col without class, it's 100% width</Col>
        </Row>
        <Row>
          <Col>if have many col without class it's devided to 4</Col>
          <Col>col 2</Col>
          <Col>col 3</Col>
          <Col>col 4</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, offset: 1 }}>.col-sm-6 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
      </Container>
    );
  }
}
```

after finish, try resize your screen and watch the box is moving

---

## [Nav](https://reactstrap.github.io/components/navs/)

```js
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#catalog">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#product">Product</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#login">Login</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
```

---

## [Navbar](https://reactstrap.github.io/components/navbar/)

```js
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from './../Nav';

export default class MoleculesNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        console.log(this);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Shopee</NavbarBrand>
                <NavbarToggler onClick={this.toggle } />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar/>
                </Collapse>
            </Navbar>
        );
    }
}

```

---

## [Card](https://reactstrap.github.io/components/card/)

```js
import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const SimpleCard = props => {

    return (
        <Card body inverse color="success">
            <CardImg top/>
            <CardBody>
                <CardTitle>this is CardTitle</CardTitle>
                <CardSubtitle>this is CardSubTitle</CardSubtitle>
                <CardText>this is CardText</CardText>
                <Button>this is Button</Button>
           </CardBody>
        </Card>
    )
}

export default SimpleCard;
```