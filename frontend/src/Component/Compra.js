import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'reactstrap';

class Compra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            obra: [],
            autor: [],
            genere: []
        }
    }
    componentDidMount() {
        let idObra = this.props.match.params.id;
        axios.get('http://api.artgalleryxisca.me/obres/' + idObra + '/info')
            .then(res => {
                const obra = res.data;
                this.setState({ obra });
            })
        axios.get('http://api.artgalleryxisca.me/obres/' + idObra)
            .then(res => {
                const autor = res.data;
                this.setState({ autor });
            })
        axios.get('http://127.0.0.1:8000/obres/' + idObra + '/genere')
            .then(res => {
                const genere = res.data;
                this.setState({ genere });
            })

    }


    render() {
        return (
            <div>
                <Container className='mt-5'>
                    <Row className='d-flex justify-content-between'>
                        <Col className='col-6'>
                            <img className="img-fluid rounded-start " src={'http://admin.artgalleryxisca.me:8080/imggaleria/imgObres/' + this.state.obra.id_obres}></img>
                        </Col>
                        <Col className='col-6'>
                            <Row className='d-flex justify-content-between'>
                                <Col className='col-8'><p className='fs-4 fw-light text-start'>{this.state.obra.nom}</p></Col>
                                <Col className='col-4 '>
                                    {(() => {
                                        if (this.state.obra.venut === 1 || this.state.obra.preu === 0) {
                                            return (
                                                <p className="fs-4 fw-light text-end" >No disponible</p>
                                            )
                                        } else {
                                            return (
                                                <p className="fs-4 fw-light text-end">{this.state.obra.preu}€</p>
                                            )
                                        }
                                    })()}
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col className='col-12'>
                                    {this.state.autor.map((artista) => (
                                        <p className="fs-5 fw-light" key={artista.nom}>{artista.nom}</p>
                                    ))}
                                </Col>
                                <Col>
                                    {this.state.genere.map((genere) => (
                                        <p className="fs-5 fw-light" key={genere.nom}>{genere.nom}</p>
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Compra;