import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Sales extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          sales: [],
        }
      }
      componentDidMount() {
        axios.get('http://127.0.0.1:8000/galeries/3/sales')
          .then(res => {
            const galeria = res.data;
            this.setState({ galeria });
        })
    }

      render(){
        return(
          <Container>

          </Container>
        );
      }
}
export default Sales;