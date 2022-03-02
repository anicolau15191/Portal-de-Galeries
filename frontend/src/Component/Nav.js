import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import icone from '../artGallery.png';
import { Link } from "react-router-dom";
import "./navbar.css";

class Head extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" className='p-0'>
        <Container fluid>
          <Navbar.Brand>
            <Link to={"/home"} className="text-decoration-none stretched-link" id='link' >
              <img src={icone} alt="logo" width={50} height={50}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/home"} className="me-3">Inici</Nav.Link>
              <Nav.Link href={"/calendari"}>Calendari</Nav.Link>
            </Nav>
            <Link to={"/Login/"} className="text-decoration-none stretched-link" id='link' >
              <Button variant="light" id="iniciSessio">Inici Sessió</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Head;