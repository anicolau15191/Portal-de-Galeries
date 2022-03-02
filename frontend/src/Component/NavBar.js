import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import icone from '../logo.png';
import { Link } from "react-router-dom";
import '../css/navbar.css';
import './navbar.css';
import Idioma from "./Idioma";
import Translate from "./local/Translate";

class NavBar extends Component {
  constructor(props) {
    super();

  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand >
            <Link to={"/home/"} className="text-decoration-none stretched-link" id='link2' aria-label="Pàgina d'inici"  >
              <img src={icone} alt="logo" width={50} height={50}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/home"} className="me-3">Inici</Nav.Link>
              <Nav.Link href={"/calendari"}>Calendari</Nav.Link>
              <NavDropdown title={<Translate string={'selec-idoma'} />} id="collasible-nav-dropdown">
                <Idioma changeLanguage={this.props.changeLanguage} />
              </NavDropdown>
          </Nav>
          <Link to={"/sesio/"} className="text-decoration-none stretched-link" id='link' >
            <Button variant='dark' id="iniciSessio"><Translate string={'inici-sesio'} /></Button>
          </Link>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;