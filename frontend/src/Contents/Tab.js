import React, { Component } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';

class Tab extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      galeria: [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/galeries/3')
      .then(res => {
        const galeria = res.data;
        this.setState({ galeria });
      })
  }
    render() {
        return (
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">{this.state.galeria.nom}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Exposicions</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Tab;