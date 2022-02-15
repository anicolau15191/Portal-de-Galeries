import React, { Component } from 'react';
import axios from 'axios';
import {withRouter, useParams } from 'react-router-dom';
class Exposicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exposicio: [],
            obres: []
        }
    }

   componentDidMount() {
        let idExpo = this.props.match.params.id;
        axios.get('http://127.0.0.1:8000/exposicions/' + idExpo + '/obres')
            .then(res => {
                const obres = res.data;
                this.setState({ obres });
                console.log(idExpo)
                axios.get('http://127.0.0.1:8000/exposicions/' + idExpo)
                    .then(res => {
                        const exposicio = res.data;
                        this.setState({ exposicio });

                    })
            })
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <p>ola</p>
                
            </div>
        );
    }
}
export default Exposicio;