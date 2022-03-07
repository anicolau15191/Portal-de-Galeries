import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import icone from '../artGallery.png';
import { Link } from "react-router-dom";
import '../css/navbar.css';
import './navbar.css';
import { lazy } from '@loadable/component'
const Translate = lazy(() => import('./local/Translate'));
const Idioma = lazy(() => import('./Idioma'));


export const UserContext = React.createContext();

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      user: "",
      pass: "",
      usuari: ""
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleNom = this.handleNom.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleNom(n) {
    this.setState({ user: n.target.value });
  }

  handlePass(p) {
    this.setState({ pass: p.target.value });
  }

  handleSubmit() {
    let user = this.state.user;
    let pass = this.state.pass;
    if (user !== "" && pass !== "") {
      axios.post("http://localhost:8000/login", null, { params: { user, pass } })
        .then(res => {
          this.setState({ usuari: res.data })
        });
      this.toggleModal();
    }

  }

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand >
            <Link to={"/home/"} className="text-decoration-none stretched-link" id='link2' aria-label="Pàgina d'inici"  >
              <img src={icone} alt="logo" width={30} height={30}></img>
            </Link>
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
            {(() => {
              if (this.state.usuari==="") {
                return (
                  <Button variant='outline-light' id="iniciSessio" onClick={this.toggleModal}><Translate string={'inici-sesio'} /></Button>
                )
              } else {
                return (
                  <p className="fs-4 fw-light text-end">{this.state.obra.preu}€</p>

                )
              }
            })()}
            
          </Navbar.Collapse>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader>Login</ModalHeader>
          <Form>
            <ModalBody>
              <label>Nom d'usuari: </label>
              <Input onChange={this.handleNom} required />
              <label>Contrasenya:</label>
              <Input onChange={this.handlePass} type="password" required />
            </ModalBody>
            <ModalFooter className="d-flex justify-content-between">
              <p></p>
                <Link to="/register" onClick={this.toggleModal}>Encara no estas registrat?</Link>
              <Button variant='dark' bg="dark" onClick={this.handleSubmit}>Entra</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Navbar>

    )
  }
}

export default NavBar;