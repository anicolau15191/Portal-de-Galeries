import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import icone from '../artGallery.png';
import { Link } from "react-router-dom";
import '../css/navbar.css';
import './navbar.css';
import { lazy } from '@loadable/component';
const Translate = lazy(() => import('./local/Translate'));
const Idioma = lazy(() => import('./Idioma'));


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      pass: "",
      usuari:""
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleNom = this.handleNom.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVal = this.handleVal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleNom(n) {
    this.setState({ email: n.target.value });
  }

  handlePass(p) {
    this.setState({ pass: p.target.value });
  }

  handleSubmit() {
    let email = this.state.email;
    let pass = this.state.pass;
    if (email !== "" && pass !== "") {
      axios.post("https://www.api.artgalleryxisca.me/login", null, { params: { email, pass } })
        .then(res => {
          this.props.login(res.data);
        });
        this.handleVal();
    } 
  }

  handleVal(){
    console.log(this.props.user);
    if(this.props.user!=0 && this.props.user!=""){
      this.toggleModal();
    }
  }

  closeModal(){
    this.setState({modal:false});
  }

  render() {
    let html;
    if(this.props.user===0){
      html = <span className="text-danger">Usuari o contrasenya incorrectes</span>
    }
    console.log(this.props.user)
    return (
        <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand >
            <Link to={"/"} className="text-decoration-none stretched-link" id='link2' aria-label="Pàgina d'inici"  >
              <img src={icone} alt="logo" width={30} height={30}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} id="home" className="text-decoration-none stretched-link me-3"><Translate string={'inici'} /></Link>
              <Link to={"/calendari"} id="calendari" className="text-decoration-none stretched-link me-3"><Translate string={'calendari'} /></Link>
              <NavDropdown title={<Translate string={'selec-idoma'} />} id="basic-nav-dropdown">
                <Idioma changeLanguage={this.props.changeLanguage} />
              </NavDropdown>
            </Nav>
            {(() => {
              if (this.props.user===0 || this.props.user==="") {
                return (
                  <Button variant='outline-light' id="iniciSessio" onClick={this.toggleModal}><Translate string={'inici-sesio'} /></Button>
                )
              } else {
                return (
                  <NavDropdown className="me-5" title={this.props.user.nom}>
                    <Button variant="light" onClick={this.props.logout}>Tanca la sessió</Button>  
                  </NavDropdown>
                )
              }
            })()}
            
          </Navbar.Collapse>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader>Login</ModalHeader>
          <Form>
            <ModalBody>
              <label>Email: </label>
              <Input onChange={this.handleNom} required />
              <label>{<Translate string="re_con" />}:</label>
              <Input onChange={this.handlePass} type="password" required />
              {html}
            </ModalBody>
            <ModalFooter className="d-flex justify-content-between">
                <Link to="/register" onClick={this.toggleModal}>{<Translate string="register" />}</Link>
              <Button variant='dark' bg="dark" onClick={this.handleSubmit}>Entra</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Navbar>

    )
  }
}

export default NavBar;