import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import icone from '../logo.png';
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navbar className='border-bottom border-dark'>
        <Container fluid>
          <Navbar.Brand >
            <Link to={"/home"} className="text-decoration-none stretched-link" id='link' >
              <img src={icone} alt="logo" width={50} height={50}></img>
            </Link>
          </Navbar.Brand>
          <Link to={"/Login/"} className="text-decoration-none stretched-link" id='link' >
            <Button variant='dark' id="iniciSessio">Inici Sessió</Button>
          </Link>
        </Container>
      </Navbar>
    )
  }
}

export default Nav;