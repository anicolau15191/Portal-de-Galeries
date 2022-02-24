import React, { Component } from 'react';

class DataExpo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        let inici = new Date(this.props.inici);
        let fi = new Date(this.props.fi);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let datainici = inici.toLocaleDateString("ca-CA",options);
        let datafi = fi.toLocaleDateString("ca-CA",options);
       

        return (
            <div >
                <p className="fw-light" >Inici : {datainici}</p>
                <p className="fw-light" >Fi : {datainici}</p>
            </div>
        );
    }
}
export default DataExpo;