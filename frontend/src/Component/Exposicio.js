import React, { Component } from 'react';
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'reactstrap';
import { Link } from "react-router-dom";

class Exposicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exposicio: [],
            obres: [],
            autors: []

        }
    }

    componentDidMount() {

        let idExpo = this.props.match.params.id;
        axios.get('http://127.0.0.1:8000/exposicions/' + idExpo + '/obres')
            .then(res => {
                const obres = res.data;
                this.setState({ obres });
                axios.get('http://127.0.0.1:8000/exposicions/' + idExpo)
                    .then(res => {
                        const exposicio = res.data;
                        this.setState({ exposicio });

                    })
                axios.get('http://127.0.0.1:8000/exposicions/' + idExpo + '/autors')
                    .then(res => {
                        const autors = res.data;
                        this.setState({ autors });

                    })
            })
    }
    render() {
        return (
            <Container id="exposicio" className='mt-3'>
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
                        <Col className="col-md-3 mb-2" key={obra.id_obres}>
                            <img className="img-fluid rounded-start col-12 " src={'http://localhost/imgObres/' + obra.id_obres} style={{ height: 300, objectFit: 'contain' }}></img>
                            <p className='col-12 d-flex justify-content-center'>{obra.nom}</p>
                            <p className='col-12 d-flex justify-content-center'>{obra.preu} €</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
export default Exposicio;