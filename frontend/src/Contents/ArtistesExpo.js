import React, { Component } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

class ArtistesExpo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artista: []
        }
    }
    componentDidMount() {
        axios.get('http://api.artgalleryxisca.me/exposicions/' + this.props.id + '/autors')
            .then(res => {
                const artista = res.data;
                this.setState({ artista });
            })
    }

    render() {
        return (
            <div>
                {this.state.artista.map((artista) => (
                    <p className="fw-light" key={artista.nom}>{artista.nom}</p>
                ))}
            </div>


        );
    }
}
export default ArtistesExpo;