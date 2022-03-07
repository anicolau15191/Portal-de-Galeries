import React, { Component,Suspense } from 'react';
import axios from 'axios';
import '../css/exposicio.css'
import { lazy } from '@loadable/component'
import { Button, ListGroup,Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
const ArtistesObra = lazy(() => import('../Contents/ArtistesObra'));
const Translate = lazy(() => import('../Component/local/Translate'));
const DataExpo = lazy(() => import('../Contents/DataExpo'));
const renderLoader = () => <p>Loading</p>;
const API = 'https://www.api.artgalleryxisca.me';
const FOTO = 'https://www.api.artgalleryxisca.me/fotos';

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

    retorna() {
        window.history.back();
    }

    render() {
        return (
            <Suspense  fallback={renderLoader()}>
            <Container>
                <Container id="exposicio" className='mt-3'>
                    <Button variant="dark" onClick={this.retorna}><Translate string={'galeria'} /></Button>
                    <Button variant="dark" className="ms-3"><Link className='text-decoration-none text-white' to={"/reserves/"+this.state.exposicio.id_exposicio}>Reserva</Link></Button>
                    <Row className='mt-3'>
                        {this.state.exposicio.map((expo) => (
                            <Col className='col-12' key={expo.nom}>
                                <Col className='col-12'><h3 className='fw-normal'>{expo.nom}</h3></Col>
                                <DataExpo inici={expo.data_ini} fi={expo.data_fi} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {this.state.obres.map((obra) => (
                            <Col md="2" lg="4" className="mb-2 mt-3" key={obra.id_obres}>
                                <Card className="card rounded border-0 h-100" id='card' >
                                    <img className="img-fluid rounded-start col-12 " src={FOTO +'/'+ obra.id_obres} id='expoImg' alt={obra.nom}></img>
                                    <div className='col-12 d-flex justify-content-center'>{obra.nom}</div>
                                    <ArtistesObra id={obra.id_obres} key={obra.id_obres} />
                                    {(() => {
                                        if (obra.venut === 1 || obra.preu === 0) {
                                            return (
                                                <p className="fw-light col-12 d-flex justify-content-center" >No disponible</p>
                                            )
                                        } else {
                                            return (
                                                <p className="fw-light col-12 d-flex justify-content-center">{obra.preu}€  →</p>
                                            )
                                        }
                                    })()}
                                    {this.state.exposicio.map((expo) => (
                                        <Link key={expo.nom} to={"/Compra/" + obra.nom + '/' + obra.id_obres} id={obra.nom} className="text-decoration-none stretched-link" />
                                    ))}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col md="12" lg="4">
                            <ListGroup className='mt-3 mb-5' >
                                <ListGroup.Item className="list"><Translate string={'artistes'} /></ListGroup.Item>
                                {this.state.autors.map((autor) => (
                                    <ListGroup.Item key={autor.nom} >{autor.nom}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col md="12" lg="4">
                            <ListGroup className='mt-3 mb-5'>
                                <ListGroup.Item className="list"><Translate string={'generes'} /></ListGroup.Item>
                                {this.state.genere.map((g) => (
                                    <ListGroup.Item key={g.nom} >{g.nom}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col md="12" lg="4">
                            <ListGroup className='mt-3 mb-5'>
                                <ListGroup.Item className="list"><Translate string={'info'} /></ListGroup.Item>
                                {this.state.exposicio.map((expo) => (
                                    <ListGroup.Item key={expo.nom}>{expo.descripcio}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </Suspense>
        );
    }
}
export default Exposicio;