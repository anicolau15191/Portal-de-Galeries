import React, { Component } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import '../css/cardExpo.css'
import ImgExpo from './ImgExpo';
import ArtistesExpo from './ArtistesExpo';
import { Link } from "react-router-dom";
const API = 'http://api.artgalleryxisca.me';


class Exposicions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exposicions: [],
    }
  }

  componentDidMount() {
    axios.get(API + '/galeries/3/exposicions')
      .then(res => {
        const exposicions = res.data;
        this.setState({ exposicions });
      })
  }

  render() {
    return (
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
                      <p className="fw-light">{expo.data_ini} - {expo.data_fi}</p>
                  </Card.Text>
                </Card.Body>
                <Link to={"/Exposicio/" + expo.nom + '/' + expo.id_exposicio + '/3'} className="text-decoration-none stretched-link"></Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Exposicions;