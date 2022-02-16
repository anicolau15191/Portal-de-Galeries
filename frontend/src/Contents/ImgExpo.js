import React, { Component } from 'react';
import axios from 'axios';

class ImgExpo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            obra : []
        }
      }
      componentDidMount() {
        axios.get('http://api.artgalleryxisca.me/exposicions/'+this.props.id+'/primeraObra')
          .then(res => {
            const obra = res.data;
            this.setState({ obra });
        })
    }

      render(){
        return(
            <img className="img-fluid rounded-start " src={'http://admin.artgalleryxisca.me:8080/imggaleria/imgObres/'+this.state.obra.id_obres} style={{ height: 300 , objectFit: 'contain'}}></img>
        );
      }
}
export default ImgExpo;