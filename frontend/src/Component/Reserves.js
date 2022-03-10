import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImgExpo from '../Contents/ImgExpo';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, localeCa } from "@mobiscroll/react";;

class Reserves extends Component {
    constructor(props) {
        super();
        this.state = {
            dates: [],
            sesions: [],
            dia: "0",
            modal: false,
            expo: "",
            sessio: "",
            modal2: false,
            reservat: 1
        }

        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSessio = this.handleSessio.bind(this);

    }

    componentDidMount() {
        let idExpo = this.props.match.params.idExpo;
        axios.get("https://www.api.artgalleryxisca.me/dies/" + idExpo)
            .then(res => {
                const dates = res.data;
                this.setState({ dates })
            })
        axios.get("https://www.api.artgalleryxisca.me/exposicio/" + idExpo)
            .then(res => {
                const expo = res.data;
                this.setState({ expo })
            })
    }

    handleChange(d) {
        this.setState({ dia: d.value })
        let idExpo = this.props.match.params.idExpo;
        let dia = d.value;
        axios.post("https://www.api.artgalleryxisca.me/sessions/" + idExpo, { dia })
            .then(res => {
                const sesions = res.data;
                this.setState({ sesions })
            })
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    toggleModal2() {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    handleSessio(sessio) {
        this.setState({ sessio: sessio });
        this.toggleModal();
    }

    handleSubmit() {
        let id_sessio = this.state.sessio.id_sessio;
        let id_usuari = this.props.user.id_usuaris;
        axios.post("https://www.api.artgalleryxisca.me/reserva", null, { params: {id_sessio, id_usuari} })
            .then(res => {
                this.setState({ reservat:res.data})
            });
        this.toggleModal();
        this.toggleModal2();

    }

    render() {
        let html;
        if (this.state.sesions.length === 0) {
            html = <p className="mt-2 text-white">No hi ha cap sessió assignada per aquest dia.</p>
        }
        let conf;
        if (this.state.reservat === 1) {
            conf = <ModalBody>S'ha reservat correctament</ModalBody>
        } if (this.state.reservat === 0) {
            conf = <ModalBody>La sessió seleccionada està plena. Perfavor seleccioni una altra sessió.</ModalBody>
        }
        return (
            <Container>
                <h3 className="mt-3">Reserva la teva entrada</h3>
                <Row>
                    <Col lg="2">
                        <div>
                            <ImgExpo id={this.props.match.params.idExpo}/>
                        </div>
                    </Col>
                    <Col lg="9" className="mt-5">
                        <h5>{this.state.expo.nom}</h5>
                        <p>{this.state.expo.descripcio}</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col lg="4" sm="12" className="mt-3">
                        <span>Tria el dia en el que vols reservar:</span>
                        <Datepicker controls={['calendar']} value={this.state.dia} dateFormat="DD-MM-YYYY" firstDay={1}
                            returnFormat="iso8601" min={this.state.dates.data_ini}
                            max={this.state.dates.data_fi} locale={localeCa} onChange={this.handleChange}
                        />
                    </Col>
                    <Col lg="8" sm="12" className="mt-3">
                        <span>Tria la sessió:</span>
                        <Container style={{ backgroundColor: '#1a1a1a', borderRadius: '10px' }} className="bg-dark shadow-lg border border-dark d-flex flex-wrap justify-content-start m-3 p-3">
                            <Row>
                                {html}
                                {this.state.sesions.map(sessio => (
                                    <Col lg="3" xs="3" className="d-flex justify-content-center" key={sessio.id_sessio}>
                                        <Button className="w-100 my-2 d-flex flex-wrap justify-content-center" value={sessio.id_sessio} variant="outline-light" onClick={() => this.handleSessio(sessio)}>
                                            <p className="pe-0 fw-bold">{sessio.hora_ini.slice(0, -3)} - {sessio.hora_fi.slice(0, -3)}</p>
                                            <span style={{ fontSize: "12px", width: "100%" }}>{sessio.nom}</span>
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Confirmació de la reserva: </ModalHeader>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                            <h6>Informació de la reserva:</h6>
                            <p>Nom de la exposició reservada: <span className="fw-bold">{this.state.expo.nom}</span> </p>
                            <p>Podrà entrar al recinte a la sessió <span className="fw-bold">{this.state.sessio.nom}</span> el dia {this.state.dia}: </p>
                            <span className="fw-bold">{this.state.sessio.hora_ini} - {this.state.sessio.hora_fi}</span>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="dark" onClick={this.handleSubmit}>Reserva</Button>
                            <Button variant="secondary" onClick={this.toggleModal}>Cancela</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                <Modal isOpen={this.state.modal2}>
                    <ModalHeader>Informació de la reserva:</ModalHeader>
                    {conf}
                    <ModalFooter>
                        <Button variant="dark" onClick={this.handleSubmit}><Link className="text-decoration-none text-white" to={"/"}>Torna a l'inici</Link></Button>
                        <Button variant="secondary" onClick={this.toggleModal2}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default withRouter(Reserves);