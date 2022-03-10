import React,{Component} from 'react';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/common/main.js";
import "../css/calendar.css";
import axios from 'axios';

class Calendar extends Component{
    constructor(props){
        super(props);
        this.state = {
            expos:[]
        }
    }

    componentDidMount(){
        axios.get("https://www.api.artgalleryxisca.me/calendar")
            .then(res => {
                const expos = res.data;
                this.setState({expos})
            })
    }

    render(){
        return(
            <div>
                <p></p>
                    <Button variant='dark' bg="dark" className="ms-3">
                        <Link to="/home" className="text-decoration-none text-white">Enrere</Link>
                    </Button>

                <FullCalendar 
                plugins = {[dayGridPlugin]}
                defaultView="dayGridMonth"
                header={{
                    left: "title",
                    right: "prev,next"
                  }}
                events={this.state.expos}
                locale="ca"
                firstDay={1}
                eventColor="black"
                  />
            </div>
        );
    }
}
export default Calendar;