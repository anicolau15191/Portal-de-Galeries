import React, { Component } from 'react';
import axios from 'axios';
const API = 'http://api.artgalleryadria.me';

class ArtistesObra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artista: []
        }
    }
    componentDidMount() {
        axios.get(API+'/obres/' + this.props.id)
            .then(res => {
                const artista = res.data;
                this.setState({ artista });
            })
    }

    render() {
        return (
            <div>
                {this.state.artista.map((artista) => (
                    <p className="fw-light col-12 d-flex justify-content-center" key={artista.nom}>{artista.nom}</p>
                ))}
            </div>
        );
    }
}
export default ArtistesObra;