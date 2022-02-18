import React, { Component } from 'react';
import axios from 'axios';
import '../css/exposicio.css'
import ArtistesObra from '../Contents/ArtistesObra';
import { Container, Row, Col, Card } from 'reactstrap';
import { Accordion, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const API = 'http://api.artgalleryxisca.me';
const FOTO = 'http://admin.artgalleryxisca.me:8080/imggaleria/imgObres/';

class Exposicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exposicio: [],
            obres: [],
            autors: [],
            genere: [],

        }
    }

    componentDidMount() {
        let idExpo = this.props.match.params.id;
        axios.get(API + '/exposicions/' + idExpo + '/obres')
            .then(res => {
                const obres = res.data;
                this.setState({ obres });
                axios.get(API + '/exposicions/' + idExpo)
                    .then(res => {
                        const exposicio = res.data;
                        this.setState({ exposicio });

                    })
                axios.get(API + '/exposicions/' + idExpo + '/autors')
                    .then(res => {
                        const autors = res.data;
                        this.setState({ autors });

                    })
                axios.get(API + '/exposicio/' + idExpo + '/genere')
                    .then(res => {
                        const genere = res.data;
                        this.setState({ genere });

                    })
            })
    }

    render() {
        let idGaleria = this.props.match.params.idGaleria;
        return (
            <Container>
                <Container id="exposicio" className='mt-3'>
                    <Link to={"/Galeria/" + idGaleria} className="text-decoration-none stretched-link mt-2" id='link' >
                        <Button variant="dark">Galeria</Button>
                    </Link>
                    <Row className='mt-3'>
                        {this.state.exposicio.map((expo) => (
                            <Col className='col-12' key={expo.nom}>
                                <Col className='col-12'><h3 className='fw-normal'>{expo.nom}</h3></Col>
                                <h5 className='fw-normal mt-3'>{expo.data_ini} - {expo.data_fi}</h5>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><p className='fw-bold'>Autors</p></Accordion.Header>
                                        <Accordion.Body>
                                            {this.state.autors.map((autor) => (
                                                <p key={autor.nom} className='fw-normal'>{autor.nom}</p>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><p className='fw-bold'>Genere</p></Accordion.Header>
                                        <Accordion.Body>
                                            {this.state.genere.map((g) => (
                                                <p key={g.nom} className='fw-normal'>{g.nom}</p>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><p className='fw-bold'>Informació</p></Accordion.Header>
                                        <Accordion.Body>
                                            <p className='col-12'>{expo.descripcio}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.obres.map((obra) => (
                            <Col className="col-md-3 mb-2 mt-3" key={obra.id_obres}>
                                <Card className="card rounded border-0 h-100" id='card' >
                                    <img className="img-fluid rounded-start col-12 " src={FOTO + obra.id_obres} style={{ height: 300, objectFit: 'cover' }} alt={obra.nom}></img>
                                    <p className='col-12 d-flex justify-content-center'>{obra.nom}</p>
                                    <ArtistesObra id={obra.id_obres} />
                                    {(() => {
                                        if (obra.venut === 1 || obra.preu === 0) {
                                            return (
                                                <p className="fw-light col-12 d-flex justify-content-center" >No disponible</p>
                                            )
                                        } else {
                                            return (
                                                <p className="fw-light col-12 d-flex justify-content-center">{obra.preu}€</p>
                                            )
                                        }
                                    })()}
                                    <Link to={"/Compra/" + obra.nom + '/' + obra.id_obres + '/'} className="text-decoration-none stretched-link" />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default Exposicio;