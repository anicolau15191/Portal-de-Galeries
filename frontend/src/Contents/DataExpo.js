import React, { Component } from 'react';

class DataExpo extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        let inici = new Date(this.props.inici);
        let fi = new Date(this.props.fi);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        let datainici = inici.toLocaleDateString("ca-CA", options);
        let datafi = fi.toLocaleDateString("ca-CA", options);


        return (
            <div class="d-flex justify-content-start align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <span className="fw-light fs-6 px-3" >{datainici}  -  {datafi}</span>
            </div>
        );
    }
}
export default DataExpo;