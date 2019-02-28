# Reactstrap 2

--- 

## Before start

* try read again on [reactstrap-1](./../reactstrap-1/README.md) about installation.
* below these code create inside folder `Molecules` with named respectively. also create `stories` too

---

## [Layout](https://reactstrap.github.io/components/layout/)

```js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Layout extends React.Component {
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
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
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

```

---

## [Card](https://reactstrap.github.io/components/card/)

ADD CODE EXAMPLE 

---