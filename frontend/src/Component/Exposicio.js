import React, { Component } from 'react';
import axios from 'axios';
import '../css/exposicio.css'
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { Link } from "react-router-dom";

class Exposicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exposicio: [],
            obres: [],
            autors: [],
            o: []

        }
    }

    componentDidMount() {
        let idExpo = this.props.match.params.id;
        axios.get('http://api.artgalleryxisca.me/exposicions/' + idExpo + '/obres')
            .then(res => {
                const obres = res.data;
                this.setState({ obres });
                axios.get('http://api.artgalleryxisca.me/exposicions/' + idExpo)
                    .then(res => {
                        const exposicio = res.data;
                        this.setState({ exposicio });

                    })
                axios.get('http://api.artgalleryxisca.me/exposicions/' + idExpo + '/autors')
                    .then(res => {
                        const autors = res.data;
                        this.setState({ autors });

                    })
            })
    }

    render() {
        return (
            <div>
                <Container id="exposicio" className='mt-3'>
                    <Row>
                        <Col >
                            <Button variant="secondary">Exposicions</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            {this.state.autors.map((autor) => (
                                <h3 className='fw-normal'>{autor.nom}</h3>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        {this.state.exposicio.map((expo) => (
                            <Col className='col-12'>
                                <h4 className='fw-normal'>{expo.nom}</h4>
                                <h5 className='fw-normal mt-2'>{expo.data_ini} - {expo.data_fi}</h5>
                                <p className='col-6'>{expo.descripcio}</p>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.obres.map((obra) => (
                            <Col className="col-md-3 mb-2 mt-3" key={obra.id_obres}>
                                <img className="img-fluid rounded-start col-12 " src={'http://localhost/imgObres/' + obra.id_obres} style={{ height: 300, objectFit: 'contain' }}></img>
                                <p className='col-12 d-flex justify-content-center'>{obra.nom}</p>
                                {(() => {
                                    if (obra.venut == 1 || obra.preu == 0) {
                                        return (
                                            <p className="fw-light col-12 d-flex justify-content-center" >No disponible</p>
                                        )
                                    } else {
                                        return (
                                            <p className="fw-light col-12 d-flex justify-content-center">{obra.preu}€</p>
                                        )
                                    }
                                })()}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Exposicio;