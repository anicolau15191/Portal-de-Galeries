import axios from 'axios';
import React, { Component } from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Button} from 'react-bootstrap';
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
    }

    componentDidMount() {
        let idExpo = this.props.match.params.idExpo;
        axios.get("http://localhost:8000/dies/"+idExpo)
            .then(res => {
                const dates = res.data;
                this.setState({ dates })
            })

        axios.get("http://localhost:8000/sessions/"+idExpo)
        .then(res=>{
            const sesions = res.data;
            this.setState({sesions})
        })
        axios.get("http://localhost:8000/exposicio/"+idExpo)
            .then(res => {
                const expo = res.data;
                this.setState({expo})
            })
    }

    handleChange(d){
        this.setState({dia : d.value});
    }

    toggleModal(){
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        let html;

        if(this.props.sesions==[]){
            html=<p>No hi ha cap sessió assignada per aquest dia.</p>
        }
        return (
            <Container>
                <h3 className="mt-3">Reserva la teva entrada</h3>
                <p></p>
                <Row>
                    <Col lg="4" sm="12" className="mt-3">
                        <span>Tria el dia en el que vols reservar:</span>
                        <Datepicker dateFormat="YYYY-MM-DD" firstDay={1} 
                        min={this.state.dates.data_ini} max={this.state.dates.data_fi} 
                        locale={localeCa}/>
                    </Col>
                    <Col lg="8" sm="12" className="mt-3">
                        <span>Tria la sessió:</span>
                        <Container className="border border-dark d-flex flex-wrap justify-content-start m-3 p-3">
                            <Row>
                                {html}
                                {this.state.sesions.map(sessio=>(
                                    <Col lg="3" key={sessio.id_sessio}>
                                        <Button className="my-2 d-flex flex-wrap justify-content-center" variant="outline-dark" onClick={this.toggleModal}>
                                            <p className="pe-0">{sessio.hora_ini.slice(0,-3)} - {sessio.hora_fi.slice(0,-3)}</p>
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
                    <ModalBody>
                        <h6>Informació de la reserva:</h6>
                        <p>{this.state.expo.nom}</p>
                        <p></p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="dark" type="submit" onClick={this.toggleModal}>Envia</Button>
                        <Button variant="secondary" onClick={this.toggleModal}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default Reserves;