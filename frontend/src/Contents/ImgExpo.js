import React, { Component } from 'react';
import axios from 'axios';
const API = 'https://www.api.artgalleryxisca.me';
const FOTO = 'https://www.api.artgalleryxisca.me/fotos';

class ImgExpo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            obra : []
        }
      }
      componentDidMount() {
        axios.get(API+'/exposicions/'+this.props.id+'/primeraObra')
          .then(res => {
            const obra = res.data;
            this.setState({ obra });
        })
    }

      render(){
        return(
            <img className="img-fluid rounded-start " src={FOTO+'/'+this.state.obra.id_obres} style={{ height: 300 , objectFit: 'cover'}} alt={this.state.obra.nom}></img>

        );
      }
}
export default ImgExpo;