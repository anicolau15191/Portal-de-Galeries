import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Container, Button} from 'react-bootstrap';
import icone from '../artGallery.png';
import { Link } from "react-router-dom";
import '../css/navbar.css';
import './navbar.css';
import { lazy } from '@loadable/component'
const Translate = lazy(() => import('./local/Translate'));
const Idioma = lazy(() => import('./Idioma'));


class NavBar extends Component {
  constructor(props) {
    super();

  }

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
          <Link to={"/home"} id="logo" className="text-decoration-none stretched-link me-3" aria-label="Pàgina d'inici"><img src={icone} alt="logo" width={50} height={50}></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/home"} id="home" className="text-decoration-none stretched-link me-3"><Translate string={'inici'} /></Link>
              <Link to={"/calendari"} id="calendari" className="text-decoration-none stretched-link me-3"><Translate string={'calendari'} /></Link>
              <NavDropdown title={<Translate string={'selec-idoma'} />} id="basic-nav-dropdown">
                <Idioma changeLanguage={this.props.changeLanguage} />
              </NavDropdown>
            </Nav>
            <Button variant="light"><Translate string={'inici-sesio'} /></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}

export default NavBar;