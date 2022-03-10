import axios from 'axios';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Form, Input, Container, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import Translate from "./local/Translate";
import './registre.css';

class Registre extends Component {
    constructor() {
        super();
        this.state = {
            poblacio: [],
            nom:"",
            last:"",
            email:"",
            pob:"",
            pass:"",
            modal:false
        }

        this.handleNom = this.handleNom.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePoblacio = this.handlePoblacio.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        axios.get("http://www.api.artgalleryadria.me/poblacio")
            .then(res => {
                const poblacio = res.data;
                this.setState({ poblacio });
            })
    }

    handleNom(n){
        this.setState({nom : n.target.value})
    }

    handleLast(l){
        this.setState({last : l.target.value})
    }

    handlePoblacio(p){
        this.setState({pob : p.target.value})
    }

    handleEmail(e){
        this.setState({email : e.target.value})
    }

    handlePassword(a){
        this.setState({pass : a.target.value})
    }

    handleToggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    handleSubmit(){
        let nom = this.state.nom;
        let last = this.state.last;
        let email = this.state.email;
        let poblacio = this.state.pob;
        let pass = this.state.pass;
        console.log(nom,last,email,poblacio,pass);
        
        if(this.state.nom!=="" && this.state.last!=="" && this.state.email!=="" && this.state.poblacio!=="" && this.state.pass!==""){
            axios.post("http://api.artgalleryadria.me/registre",null,{params:{nom:nom,last:last,email:email,pob:poblacio,pass:pass}});
            this.handleToggle();

        }
    }

    render() {
        return (
            <Container id="register" className="mx-auto mt-5 ps-0" style={{ border: "1px solid gray", borderRadius: "15px" }}>
                <Row lg="8">
                    <Col className="col-xl-6 d-none d-xl-block mx-0">
                        <img src="./registre.jpg" className='img-fluid' style={{ height: "100%", objectFit: "cover", overflow: "hidden" }} />
                    </Col>
                    <Col className='col-xl-6'>
                        <Form>
                        <Row className="col-12 mb-5">
                            <h1 className="mt-3">{<Translate string="registre" />}</h1>
                            <Col className="mt-5" lg="6" sm="12">
                                <span className="ms-3">{<Translate string="re_nom" />}:<span className="text-danger">*</span></span>
                                <Input variant="dark" className='col-xl-6 col-sm-12' onChange={this.handleNom} required />
                            </Col>
                            <Col className="mt-5" lg="6" sm="12">
                                <span className="ms-1">{<Translate string="re_cog" />}:<span className="text-danger">*</span></span>
                                <Input className='col-xl-6 col-sm-12' onChange={this.handleLast} required  />
                            </Col>
                        </Row>
                        <Row className="col-12 mb-5">
                            <Col className="col-12">
                                <span className="ms-3">Email:<span className="text-danger">*</span></span>
                                <Input className='col-xl-6 col-sm-12' onChange={this.handleEmail} required  />
                            </Col>
                        </Row>
                        <Row className="col-12 mb-5">
                            <Col className="col-12">
                                <span className="ms-3">{<Translate string="re_pob" />}:<span className="text-danger">*</span></span>
                                <Input name="poblacio" className='col-xl-6 col-sm-12' type="select" onChange={this.handlePoblacio}  required >
                                    <option value="0">Selecciona</option>
                                    {this.state.poblacio.map((poblacio) => (
                                        <option value={poblacio.id_poblacio} key={poblacio.id_poblacio}>{poblacio.nom}</option>
                                    ))}
                                </Input>
                            </Col>
                        </Row>
                        <Row className="col-12 mb-5">
                            <Col className="col-12">
                                <span className="ms-3">{<Translate string="re_con" />}:<span className="text-danger">*</span></span>
                                <Input name="password" className='col-xl-6 col-sm-12' onChange={this.handlePassword} type="password" required />
                            </Col>
                        </Row>
                        <Row className="col-12 mb-5">
                            <Col className="col-12 d-flex justify-content-end">
                                <Button variant="dark" onClick={this.handleSubmit} className="me-5 col-2">Envia</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                    {<Translate string="re_conf" />}
                    </ModalHeader>
                    <ModalBody>
                        <p>{<Translate string="re_user" />}<span>{this.state.nom}</span></p>
                        <p>{<Translate string="re_pass" />}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Link to={"/"} className="text-decoration-none stretched-link">
                            <Button variant="dark" bg="dark">{<Translate string="re_direct" />}</Button>
                        </Link>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default Registre;