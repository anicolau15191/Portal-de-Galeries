import axios from 'axios';
import React, { Component } from 'react';
import { generatePath } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poblacio: [],
            genPare: [],
            genFill: [],
            selected:0
        }
    }

    componentDidMount() {
        axios.get("http://api.artgalleryxisca.me/poblacio")
            .then(res => {
                const poblacio = res.data;
                this.setState({ poblacio });
            })
        axios.get("http://api.artgalleryxisca.me/generes")
            .then(res => {
                const genPare = res.data;
                this.setState({ genPare });

            })
        axios.get("http://api.artgalleryxisca.me/generes/subgeneres")
            .then(res => {
                const genFill = res.data;
                this.setState({ genFill });
            })
    }

    render() {
        return (
            <div>
                <Form  className="mt-5 mb-4 bg-dark p-4 d-flex justify-content-around mx-3 text-white">
                    <FormGroup className="col-2 me-2">
                        <Label for="nom">Cerca per nom</Label>
                        <Input type="nom" id="nom" name="nom" placeholder="Cerca..."></Input>
                    </FormGroup>
                    <FormGroup className="col-2">
                        <Label>Població:</Label>
                        <Input type="select" id="poblacio" name="poblacio">
                            <option value="0">Selecciona</option>
                            {this.state.poblacio.map((poblacio) => (
                                    <option value={poblacio.id_poblacio} key={poblacio.id_poblacio}>{poblacio.nom}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-2">
                        <Label>Genere:</Label>
                        <Input type="select" id="genere" name="genere" onChange={(()=>{
                        })}>
                            <option value="0">Selecciona</option>
                            {this.state.genPare.map((genPare) => (

                                    <option value={genPare.id} key={genPare.id_genere}>{genPare.nom}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-2">
                        <Label>Subgenere:</Label>
                        <Input type="select" id="subgenere" name="subgenere">
                            <option value="0">Selecciona</option>
                            {this.state.genFill.map((genFill) => (
                                <option value={genFill.id_genere} key={genFill.id_genere}>{genFill.nom}</option>

                            ))}
                        </Input>
                    </FormGroup>
                    <Button className="h-50 align-self-center col-1 bg-light text-black">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Search;