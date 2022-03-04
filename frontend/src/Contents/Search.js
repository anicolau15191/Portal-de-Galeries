import axios from 'axios'; 
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poblacio: [],
            genPare: [],
            genFill: [],
            genere:"0"
        }

        this.handleCerca = this.handleCerca.bind(this);
        this.handlePoblacio = this.handlePoblacio.bind(this);
        this.handleGenere = this.handleGenere.bind(this);
        this.handleSubgenere = this.handleSubgenere.bind(this);
    }

    componentDidMount() {
        axios.get("https://www.api.artgalleryxisca.me/poblacio")
            .then(res => {
                const poblacio = res.data;
                this.setState({ poblacio });
            })
        axios.get("https://www.api.artgalleryxisca.me/generes")
            .then(res => {
                const genPare = res.data;
                this.setState({ genPare });

            })
        axios.get("https://www.api.artgalleryxisca.me/generes/subgeneres")
            .then(res => {
                const genFill = res.data;
                this.setState({ genFill });
            })
    }

    applyFilters(genere){
        if(this.state.genere==="0"){
            return false;
        }else{
            return this.state.genere==genere.id_genere2;
        }
    }

    handlePoblacio(p){
        this.props.handlePoblacio(p.target.value);
    }

    handleGenere(g){
        this.props.handleGenere(g.target.value);
        this.setState({genere : g.target.value})
    }

    handleSubgenere(s){
        this.props.handleSubgenere(s.target.value);
    }

    handleCerca(e){
        this.props.handleCerca(e.target.value);
    }

    

    render() {
        return (
                <div  className="mt-0 mb-4 bg-dark p-4 d-flex flex-wrap justify-content-around mx-3 text-white">
                    <FormGroup className="col-lg-2 col-sm-12">
                        <Label>Cerca per nom</Label>
                        <Input type="text" className="form-control" onChange={this.handleCerca}></Input>
                    </FormGroup>
                    <FormGroup className="col-lg-2 col-sm-12">
                        <Label>Població:</Label>
                        <Input type="select" id="poblacio" name="poblacio" onChange={this.handlePoblacio}>
                            <option value="0">Selecciona</option>
                            {this.state.poblacio.map((poblacio) => (
                                <option value={poblacio.id_poblacio} key={poblacio.id_poblacio}>{poblacio.nom}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-lg-2 col-sm-12">
                        <Label>Genere:</Label>
                        <Input type="select" id="genere" name="genere" onChange={this.handleGenere}>
                            <option value="0">Selecciona</option>
                            {this.state.genPare.map((genPare) => (
                                <option value={genPare.id_genere} key={genPare.id_genere}>{genPare.nom}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-lg-2 col-sm-12">
                        <Label>Subgenere:</Label>
                        <Input type="select" id="subgenere" name="subgenere" onChange={this.handleSubgenere}>
                            <option value="0">Selecciona</option>
                            {this.state.genFill
                            .filter(genere => this.applyFilters(genere))
                            .map((genFill) => (
                                <option value={genFill.id_genere} key={genFill.id_genere}>{genFill.nom}</option>

                            ))}
                        </Input>
                    </FormGroup>
                </div>

        )
    }
}
export default Search;