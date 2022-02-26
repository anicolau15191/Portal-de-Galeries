import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import '../css/Galeria.css'
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
const GaleriaMap = lazy(() => import('../Component/GaleriaMap'));
const renderLoader = () => <p>Loading</p>;
/*import GaleriaMap from '../Component/GaleriaMap';
import axios from 'axios';
import '../css/Galeria.css'
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-bootstrap';*/
const API = 'http://api.artgalleryxisca.me';
const FOTO = 'http://admin.artgalleryxisca.me:8080/imggaleria';

class Galeria extends Component {

  constructor(props) {
    super(props);

    this.state = {
      galeria: [],
      poblacio: [],
      galeriaCoordenades: [],
      generes: []
    }
  }

  componentDidMount() {
    let id = this.props.id
    axios.get(API + '/galeries/' + id)
      .then(res => {
        const galeria = res.data;
        this.setState({ galeria });
        axios.get(API + '/galeries/' + this.state.galeria.id_galeria + '/generesPare')
          .then(res => {
            const generes = res.data;
            this.setState({ generes });
          })
      })

    axios.get(API + '/galeria/' + id + '/poblacio')
      .then(res => {
        const poblacio = res.data;
        this.setState({ poblacio });
      })

    axios.get(API + '/galeries/' + id + '/coordenades')
      .then(res => {
        const galeriaCoordenades = res.data;
        this.setState({ galeriaCoordenades });
      })
  }
  render() {
    let id = this.props.id
    return (
      <Suspense  fallback={renderLoader()}>
        <div className='galeria'>
          <Container className='mt-3 mb-3' id='tab'>
          </Container>
          <Container id='info' className='d-flex justify-content-md-center mb-3'>
            <Row>
              <Col md="12" lg="6" id='fotos'>
                <Carousel>
                  <Carousel.Item>
                    <img className="carrusel d-block w-100" src={FOTO + '/' + id + '/' + id + '-1'} onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = '../default.jpg'
                    }} style={{ objectFit: 'cover' }} alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="carrusel d-block w-100" src={FOTO + '/' + id + '/' + id + '-2'} onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = '../default.jpg'
                    }} style={{ objectFit: 'cover' }} alt=".." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="carrusel d-block w-100" src={FOTO + '/' + id + '/' + id + '-3'} onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = '../default.jpg'
                    }} style={{ objectFit: 'cover' }} alt=".." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="carrusel d-block w-100" src={FOTO + '/' + id + '/' + id + '-4'} onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = '../default.jpg'
                    }} style={{ objectFit: 'cover' }} alt=".." />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <Row>
                  <Col className='col-12 mt-3 d-flex justify-content-md-center'>
                    <h3>{this.state.galeria.nom}</h3>
                  </Col>
                  <Col className='col-12 mt-1'>
                    <hr />
                  </Col>
                  <Col className='col-12 mt-1 d-flex justify-content-md-start'>
                    <span>Generes : </span>
                    {this.state.generes.map((g) => (
                      <span key={g.id_genere}>{g.nom}</span>
                    ))}
                  </Col>
                  <Col className='col-12 mt-1'>
                    <hr />
                  </Col>
                  <Col className='col-6 d-flex justify-content-md-center flex-column'>
                    <span className='mb-3'> Telèfon :  {this.state.galeria.telefon}</span>
                    <span> Email : {this.state.galeria.email}</span>
                  </Col>
                  <Col className='col-6 d-flex justify-content-md-center flex-column'>
                    {this.state.poblacio.map(poblacio => <span className='mb-3' key={poblacio.id_poblacio}>Població : {poblacio.nom}</span>)}
                    <span> Direcció :  {this.state.galeria.direccio}</span>
                  </Col>
                  <Col className='col-12 mt-2'>
                    <hr />
                  </Col>
                  <Col className='col-12 mt-2'>
                    <div >{this.state.galeria.descripcio}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container id='mapa' className='mb-3'>
            <GaleriaMap galeria={this.state.galeriaCoordenades} />
          </Container>
        </div>
      </Suspense>
    );
  }
}

export default  Galeria;