import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/cardExpo.css'
import ImgExpo from './ImgExpo';
import ArtistesExpo from './ArtistesExpo';

class Exposicions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exposicions: [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/galeries/3/exposicions')
      .then(res => {
        const exposicions = res.data;
        this.setState({ exposicions });
      })
  }

  render() {
    return (
      <div>
        <Container id="exposicions">
          <Row>
            {this.state.exposicions.map((expo) => (
              <Col className="col-md-6 mb-2" key={expo.id_exposicio}>
                <Card className="mb-3" id="expo">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <ImgExpo id={expo.id_exposicio} />
                    </div>
                    <div className="col-md-8">
                      <Card.Body>
                        <Card.Title>{expo.nom}</Card.Title>
                        <Card.Text>{expo.descripcio}</Card.Text>
                        <Card.Text><small>{expo.data_ini} - {expo.data_fi}</small></Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              {/*  <Card className="card rounded border-0 h-100" id='card' >
                  <ImgExpo id={expo.id_exposicio} />
                  <Card.Body className="card-body p-4" >
                    <Card.Title> {expo.nom}</Card.Title>
                    <Card.Text>
                      <Col className='col-12'>{expo.descripcio}</Col>
                    </Card.Text>
                  </Card.Body>
                  <Container className='mb-2 d-flex justify-content-md-center'>
                    <Row>
                      <ArtistesExpo id={expo.id_exposicio} />
                      <Col className='col-12 d-flex justify-content-md-center'>{expo.data_ini} - {expo.data_fi}</Col>
                    </Row>
                  </Container>
                  <Button variant="secondary">Go somewhere</Button>
                </Card>*/}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Exposicions;