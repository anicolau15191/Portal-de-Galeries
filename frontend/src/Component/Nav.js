import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import icone from '../artGallery.png';
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#"><img src={icone} alt="logo" width={40} height={40}></img></Navbar.Brand>
          <Link to={"/Login/"} className="text-decoration-none stretched-link" id='link' >
            <Button variant='dark'>Inici Sessió</Button>
          </Link>
        </Container>
      </Navbar>
    )
  }
}

export default Nav;