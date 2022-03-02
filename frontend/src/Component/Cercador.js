import React, { Component } from 'react';
import Galeries from "../Component/Galeries";
import Search from '../Contents/Search';
import axios from 'axios';

class Cercador extends Component{
    constructor(){
        super();
        this.state = {
            galeries:[],
            genere: "0",
            subgenere: "0",
            poblacio: "0",
            cerca:""
        };
        
        this.changeGenere = this.changeGenere.bind(this);
        this.changeSubgenere = this.changeSubgenere.bind(this);
        this.changePoblacio = this.changePoblacio.bind(this);
        this.changeCerca = this.changeCerca.bind(this);
    }

    changeGenere(g){
        this.setState({genere : g});
    }

    changeSubgenere(s){
        this.setState({subgenere : s});
    }

    changePoblacio(p){
        this.setState({poblacio : p});
    }

    changeCerca(e){
        this.setState({cerca : e})
    }

    componentDidMount() {
        axios.get("http://localhost:8000/galeries")
        .then(res => {
            const galeries = res.data;
            this.setState({galeries})
        })
    }

    render(){
        return(
            <div>
                <div className="mx-3 bg-dark mt-3 mb-0 d-flex justify-content-center align-items-center">
                    <h1 className="text-center text-light">Art Gallery</h1>
                </div>
                <Search handlePoblacio={this.changePoblacio}
                        handleGenere={this.changeGenere}
                        handleSubgenere={this.changeSubgenere}
                        handleCerca={this.changeCerca} />
                <Galeries galeries={this.state.galeries}
                          genere={this.state.genere}
                          subgenere={this.state.subgenere}
                          poblacio={this.state.poblacio}
                          cerca={this.state.cerca} />
            </div>
        );
    }
}
export default Cercador;
