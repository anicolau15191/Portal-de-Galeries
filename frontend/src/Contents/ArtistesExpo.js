import React, { Component } from 'react';
import axios from 'axios';
import {Col} from 'react-bootstrap';

class ArtistesExpo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artista: []
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/exposicions/' + this.props.id + '/autors')
            .then(res => {
                const artista = res.data;
                this.setState({ artista });
            })
    }

    render() {
        return (
            <Col className='col-12 d-flex justify-content-md-center'>
                {this.state.artista.map((artista) => (
                    <p key={artista.nom}>{artista.nom}</p>
                ))}
            </Col>
        );
    }
}
export default ArtistesExpo;