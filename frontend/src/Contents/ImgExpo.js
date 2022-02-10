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
        axios.get('http://127.0.0.1:8000/exposicions/'+this.props.id+'/primeraObra')
          .then(res => {
            const obra = res.data;
            this.setState({ obra });
        })
    }

      render(){
        return(
            <img className="card-img-top" src={'http://localhost/imgObres/'+this.state.obra.id_obres} style={{ height: 250 }}></img>
        );
      }
}
export default ImgExpo;