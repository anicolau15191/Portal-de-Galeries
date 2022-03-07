import React, { Component } from 'react';
import CardGaleria from '../Contents/CardGaleria';
import {Button, Container, Row, Col} from 'reactstrap';

class Galeries extends Component {
    constructor(props){
        super(props);
    }

    applyFilters(galeria){
        if(this.props.genere==="0" && this.props.subgenere==="0" && this.props.poblacio==="0"){
            return galeria.nom.indexOf(this.props.cerca)!==-1;

        }if(this.props.genere!=="0" && this.props.subgenere==="0" && this.props.poblacio==="0"){
            return galeria.generes!==null && galeria.generes.indexOf(this.props.genere)!==-1 && galeria.nom.indexOf(this.props.cerca)!==-1;

        }if(this.props.genere!=="0" && this.props.subgenere!=="0" && this.props.poblacio==="0"){
            return galeria.generes!==null && galeria.generes.indexOf(this.props.subgenere)!==-1 && galeria.nom.indexOf(this.props.cerca)!==-1;

        }if(this.props.genere==="0" && this.props.subgenere==="0" && this.props.poblacio!=="0"){
            return galeria.id_poblacio==this.props.poblacio && galeria.nom.indexOf(this.props.cerca)!==-1;

        }if(this.props.genere!=="0" && this.props.subgenere!=="0" && this.props.poblacio!=="0"){
            return galeria.generes!==null && galeria.generes.indexOf(this.props.subgenere)!==-1 && galeria.id_poblacio==this.props.poblacio && galeria.nom.indexOf(this.props.cerca)!==-1;
        }if(this.props.genere!=="0" && this.props.subgenere==="0" && this.props.poblacio!=="0"){
            return galeria.generes!==null && galeria.generes.indexOf(this.props.genere)!==-1 && galeria.id_poblacio==this.props.poblacio && galeria.nom.indexOf(this.props.cerca)!==-1;
        }
    }

    render() {
        return(
                <Row className='mx-3 d-flex flex-wrap justify-content-start'>
                    {
                    this.props.galeries
                    .filter(galeria => this.applyFilters(galeria))
                    .map(galeria => 
                    <CardGaleria key={galeria.id_galeria} galeria={galeria} />)
                    }
                </Row>

        );
    }
}
export default Galeries;