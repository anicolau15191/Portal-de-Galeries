import React, { Component } from 'react';
import axios from 'axios';
const API = 'https://www.api.artgalleryxisca.me';

class ArtistesExpo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artista: []
        }
    }
    componentDidMount() {
        axios.get(API + '/exposicions/' + this.props.id + '/autors')
            .then(res => {
                const artista = res.data;
                this.setState({ artista });
            })
    }

    render() {
        if (this.state.artista.length > 1) {
            return (
                <div className='d-flex flex-wrap'>
                    {this.state.artista.map((artista) => (
                        <p className="fw-light col-6" key={artista.nom}>{artista.nom}</p>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    {this.state.artista.map((artista) => (
                        <p className="fw-light" key={artista.nom}>{artista.nom}</p>
                    ))}
                </div>
            );
        }

    }
}
export default ArtistesExpo;