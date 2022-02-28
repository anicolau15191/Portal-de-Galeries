import React, { Component, Suspense } from 'react';
import { lazy } from '@loadable/component'
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import '../css/cardExpo.css'
import { Link } from "react-router-dom";
import Translate from "../Component/local/Translate";
const ImgExpo = lazy(() => import('./ImgExpo'));
const ArtistesExpo = lazy(() => import('./ArtistesExpo'));
const DataExpo = lazy(() => import('./DataExpo'));
const renderLoader = () => <p>Loading</p>;
const API = 'http://api.artgalleryxisca.me';


class Exposicions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exposicions: [],
    }
  }

  componentDidMount() {
    let id = this.props.id
    axios.get(API + '/galeries/' + id + '/exposicions')
      .then(res => {
        const exposicions = res.data;
        this.setState({ exposicions });
      })
  }

  render() {
    let id = this.props.id
    if (this.state.exposicions.length === 0) {
      return (
        <Container className='d-flex justify-content-center mt-5'>
          <h1><Translate string={'no-expo'} /></h1>
        </Container>
      )
    } else {
      return (
        <Suspense fallback={renderLoader()}>
          <Container id="exposicions">
            <Row>
              {this.state.exposicions.map((expo) => (
                <Col md="2" lg="4" className="mb-2" key={expo.id_exposicio}>
                  <Card className="card rounded border-0 h-100" id='card' >
                    <ImgExpo id={expo.id_exposicio} />
                    <Card.Body className="card-body" >
                      <Card.Title> {expo.nom}</Card.Title>
                      <Card.Text>
                        <ArtistesExpo id={expo.id_exposicio} />
                        <DataExpo inici={expo.data_ini} fi={expo.data_fi} />
                      </Card.Text>
                    </Card.Body>
                    <Link to={"/Exposicio/" + expo.nom + '/' + expo.id_exposicio + '/' + id} className="text-decoration-none stretched-link"></Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Suspense>
      );
    }

  }
}
export default Exposicions;