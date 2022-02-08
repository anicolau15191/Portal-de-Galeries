import React, { Component } from 'react';
import axios from 'axios';
import './Galeria.css'
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import { FaPhoneAlt }from 'react-icons/fa';
import Tab from './Tab';

class Galeria extends Component {

  constructor(props) {
    super(props);

    this.state = {
      galeria: [],
      poblacio:[]
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/galeries/3')
      .then(res => {
        const galeria = res.data;
        this.setState({ galeria });
      })

      axios.get('http://127.0.0.1:8000/galeria/3/poblacio') 
      .then(res => {
        const poblacio = res.data;
        this.setState({ poblacio });
      })
  }

  render() {
    return (
      <div className='galeria'>
        <Container className='mt-3 mb-3' id='tab'>
          <Tab/>
        </Container>
        <Container id='info' className='d-flex justify-content-md-center'>
          <Row>
            <Col id='fotos'>
              <Carousel>
                <Carousel.Item>
                  <img className="carrusel d-block w-100" src="http://localhost/52/52-1" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel d-block w-100" src="http://localhost/52/52-2" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel d-block w-100" src="http://localhost/52/52-3" alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel d-block w-100" src="http://localhost/52/52-4" alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <Row>
                <Col className='col-12 mt-3'>
                  <p >{this.state.galeria.descripcio}</p>
                </Col>
                <Col className='col-12 mb-3 mt-2 d-flex justify-content-md-center'>
                  <span className='me-3 fs-5'>*</span>
                  <span className='me-3 fs-5'>*</span>
                  <span className='me-3 fs-5'>*</span>
                </Col>
                <Col className='col-6 d-flex justify-content-md-center flex-column'>
                  <span><FaPhoneAlt/>  {this.state.galeria.telefon}</span>
                  <span><FaPhoneAlt/>  {this.state.galeria.email}</span>
                  <span><FaPhoneAlt/>  {this.state.galeria.direccio}</span>
                  <span><FaPhoneAlt/>  {this.state.poblacio.nom}</span>
                </Col>
                <Col className='col-6 d-flex justify-content-md-center'>
                  <span><FaPhoneAlt/>  {this.state.galeria.email}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Galeria;