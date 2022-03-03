import React, { Component, Suspense } from 'react';
import axios from 'axios';
import { lazy } from '@loadable/component'
import '../css/Galeria.css'
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import Translate from "../Component/local/Translate";
const GaleriaMap = lazy(() => import('../Component/GaleriaMap'));
const renderLoader = () => <p>Loading</p>;
const API = 'https://api.artgalleryxisca.me';
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
      <Suspense fallback={renderLoader()}>
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
                    <span><Translate string={'generes'} /> : </span>
                    {this.state.generes.map((g) => (
                      <span key={g.id_genere}>{g.nom}</span>
                    ))}
                  </Col>
                  <Col className='col-12 mt-1'>
                    <hr />
                  </Col>
                  <Col className='col-6 d-flex justify-content-md-center flex-column'>
                    <span className='mb-3'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg> :  {this.state.galeria.telefon}</span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg> : {this.state.galeria.email}</span>
                  </Col>
                  <Col className='col-6 d-flex justify-content-md-center flex-column'>
                    {this.state.poblacio.map(poblacio => <span className='mb-3' key={poblacio.id_poblacio}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg> : {poblacio.nom}</span>)}
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg> :  {this.state.galeria.direccio}</span>
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

export default Galeria;