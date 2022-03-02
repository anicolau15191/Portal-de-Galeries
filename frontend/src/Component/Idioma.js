import React, { Component } from 'react'
import catala from '../ca.png';
import castella from '../es.png';
import { NavDropdown, Nav } from 'react-bootstrap'
import Translate from "../Component/local/Translate";
class Idioma extends Component {

    render() {
        const { changeLanguage } = this.props;
        return (
            <div>
                <NavDropdown.Item id="ca" onClick={changeLanguage}> <img src={catala} alt="ca"  width={20} height={20}></img><Translate string={'catala'} /> </NavDropdown.Item>
                <NavDropdown.Item id="es" onClick={changeLanguage}> <img src={castella} alt="es" width={20} height={20}></img><Translate string={'castella'} /></NavDropdown.Item>
            </div>
        )
    }
}

export default Idioma;