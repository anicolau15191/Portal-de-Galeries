import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container,Button } from 'react-bootstrap';
import icone from '../artGallery.png';

class Nav extends Component{
    constructor(props){
        super();
      }

      render(){
          return(
            <Navbar bg="light">
              <Container fluid>
              <Navbar.Brand href="#"><img src={icone} alt="logo" width={45} height={45}></img></Navbar.Brand>
              <Button variant="outline-success">Search</Button>
              </Container>
            </Navbar>
          )
      }
}

export default Nav;