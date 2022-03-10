import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CompraOk extends Component {

    constructor() {
        super();
        this.state = {
            show: true
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
        let nom = this.props.match.params.nom;
        let preu = this.props.match.params.preu;
        let pedido = this.props.match.params.pedido;
        return (
            <div>
                <Modal show={this.state.show} animation={false}>
                    <Modal.Header >
                        <Modal.Title>Gràcies per la teva compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Obra : {nom}</p>
                        <p>Numero de comanda : {pedido} </p>
                        <p>Import total : {preu}€</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Link to={"/"} className="text-decoration-none stretched-link" > <Button variant="dark">Inici</Button></Link>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }
}
export default CompraOk;