import React, { Component } from 'react';
import axios from 'axios';
import '../css/compra.css'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
const API = 'http://api.artgalleryxisca.me';
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
                <Button variant="dark" id="expo" onClick={this.retorna}>Exposicio</Button>
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
                                                <a href={"/pago?idObra=" + this.state.obra.id_obres} className="text-decoration-none stretched-link mt-2" id='link3' >
                                                    <Button className='px-5' id="compra" variant="dark">COMPRA</Button>
                                                </a>
                                                <Accordion defaultActiveKey="0" flush className='mt-5'>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header><p>Informació sobre l'enviament</p></Accordion.Header>
                                                        <Accordion.Body>
                                                            <p className='fw-light'>
                                                                El termini de lliurament estimat a adreces d'Espanya (llevat de les Illes Balears i les Canàries i Ceuta i Melilla)
                                                                serà de 2 a 4 dies laborables. Per a enviaments internacionals es realitzarà una estimació del cost del transport i
                                                                termini de lliurament i se li enviarà al comprador un pressupost si així ho sol·licita
                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header><p>Garantia d'autenticitat</p></Accordion.Header>
                                                        <Accordion.Body>
                                                            <p className='fw-light'> La Galeria garanteix l'autenticitat de totes les obres d'art.</p>
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