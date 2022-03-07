import axios from 'axios';
import React, { Component } from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ImgExpo from '../Contents/ImgExpo';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, localeCa } from "@mobiscroll/react";;

class Reserves extends Component {
    constructor() {
        super();
        this.state = {
            dates: [],
            sesions:[],
            dia:"0",
            modal: false,
            expo:"",
            sessio:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSessio = this.handleSessio.bind(this);
        this.printSessions = this.printSessions.bind(this);

    }

    componentDidMount() {
        let idExpo = this.props.match.params.idExpo;
        axios.get("http://localhost:8000/dies/"+idExpo)
            .then(res => {
                const dates = res.data;
                this.setState({ dates })
            })
        axios.get("http://localhost:8000/exposicio/"+idExpo)
            .then(res => {
                const expo = res.data;
                this.setState({expo})
            })
    }

    printSessions(){
    }

    handleChange(d){
        this.setState({dia : d.value})
        let idExpo = this.props.match.params.idExpo;
        let dia = d.value;
        axios.post("http://localhost:8000/sessions/"+idExpo, {dia})
        .then(res=>{
            const sesions = res.data;
            this.setState({sesions})
        })
    }

    toggleModal(e){
        this.setState({
            modal: !this.state.modal
        })
    }

    handleSessio(sessio){
        this.setState({sessio : sessio});
        this.toggleModal();
    }

    handleSubmit(){
        let id_sessio = this.state.sessio.id_sessio;
        let id_usuari = 3;
        axios.post("http://localhost:8000/reserva",null,{params:{id_sessio,id_usuari}});
    
    }

    render() {
        let html;
        if(this.state.sesions.length===0){
            html=<p className="mt-2 text-white">No hi ha cap sessió assignada per aquest dia.</p>
        }
        return (
            <Container>
                <h3 className="mt-3">Reserva la teva entrada</h3>
                <Row>
                    <Col lg="2">

                    </Col> 
                    <Col lg="9">
                        <h5>{this.state.expo.nom}</h5>
                        <p>{this.state.expo.descripcio}</p>    
                    </Col>   
                </Row>
                <Row>
                    <Col lg="4" sm="12" className="mt-3">
                        <span>Tria el dia en el que vols reservar:</span>
                        <Datepicker controls={['calendar']} value={this.state.dia} dateFormat="DD-MM-YYYY" firstDay={1}
                        returnFormat="iso8601"min={this.state.dates.data_ini}
                        max={this.state.dates.data_fi} locale={localeCa} onChange={this.handleChange}
                        />
                    </Col>
                    <Col lg="8" sm="12" className="mt-3">
                        <span>Tria la sessió:</span>
                        <Container style={{backgroundColor:'#1a1a1a', borderRadius:'10px'}} className="bg-dark shadow-lg border border-dark d-flex flex-wrap justify-content-start m-3 p-3">
                            <Row>
                                {html}
                                {this.state.sesions.map(sessio=>(
                                    <Col lg="3" xs="3" className="d-flex justify-content-center" key={sessio.id_sessio}>
                                        <Button className="w-100 my-2 d-flex flex-wrap justify-content-center" value={sessio.id_sessio} variant="outline-light" onClick={() => this.handleSessio(sessio)}>
                                            <p className="pe-0 fw-bold">{sessio.hora_ini.slice(0,-3)} - {sessio.hora_fi.slice(0,-3)}</p>
                                            <span style={{fontSize:"12px",width:"100%"}}>{sessio.nom}</span>
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
                            <Button variant="dark" type="submit" onClick={this.handleSubmit}>Reserva</Button>
                            <Button variant="secondary" onClick={this.toggleModal}>Cancela</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </Container>
        );
    }
}
export default Reserves;