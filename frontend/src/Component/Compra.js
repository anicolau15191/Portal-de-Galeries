import React, { Component } from 'react';
import axios from 'axios';
import '../css/compra.css'
import { lazy } from '@loadable/component'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
const Translate = lazy(() => import('./local/Translate'));
const API = 'https://www.api.artgalleryxisca.me';
const FOTO = 'http://admin.artgalleryxisca.me:8080/imggaleria/imgObres/';

class Compra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            obra: [],
            autor: [],
            genere: [],
            preu: [],
        }
    }
    componentDidMount() {
        let idObra = this.props.match.params.id;
        axios.get(API + '/obres/' + idObra + '/info')
            .then(res => {
                const obra = res.data;
                this.setState({ obra });
                this.setState({ preu: this.state.obra.preu });
            })
        axios.get(API + '/obres/' + idObra)
            .then(res => {
                const autor = res.data;
                this.setState({ autor });
            })
        axios.get(API + '/obres/' + idObra + '/genere')
            .then(res => {
                const genere = res.data;
                this.setState({ genere });
            })

    }

    retorna() {
        window.history.back();
    }

    render() {
        return (
            <Container className='mt-3'>
                <Button variant="dark" id="exposicio" onClick={this.retorna}><Translate string={'expo'}/></Button>
                <Row className='d-flex justify-content-between mt-3'>
                    <Col md="12" lg="6">
                        <img className="img-fluid rounded-start " id='foto' src={FOTO + this.state.obra.id_obres} alt={this.state.obra.nom}></img>
                    </Col>
                    <Col md="12" lg="6">
                        <Row className='d-flex justify-content-between'>
                            <Col className='col-8'><p className='fs-4 fw-bold text-start'>{this.state.obra.nom}</p></Col>
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
                        <Row className='mt-2'>
                            <Col className='col-12 mt-3'>
                                {(() => {
                                    if (this.state.obra.venut === 1 || this.state.obra.preu === 0) {
                                        return (
                                            <p className="fs-4 fw-light text-end" ></p>
                                        )
                                    } else {
                                        return (
                                            <Col className="d-grid gap-2 mt-3">
                                                <a href={API+"/pago?idObra=" + this.state.obra.id_obres} className="text-decoration-none stretched-link mt-2" id='link3' >
                                                    <Button className='px-5' id="compra" variant="dark">COMPRAR</Button>
                                                </a>
                                                <Accordion defaultActiveKey="0" flush className='mt-5 mb-5'>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header><p><Translate string={'garantia'}/></p></Accordion.Header>
                                                        <Accordion.Body>
                                                            <p className='fw-light'><Translate string={'infoEnviament'}/></p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header><p><Translate string={'enviament'}/></p></Accordion.Header>
                                                        <Accordion.Body>
                                                            <p className='fw-light'> <Translate string={'infoGarantia'}/></p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Col>
                                        )
                                    }
                                })()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Compra;