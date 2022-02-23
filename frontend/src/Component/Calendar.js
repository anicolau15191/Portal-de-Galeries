import React,{Component} from 'react';
import { Container, Button } from 'react-bootstrap';
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
        axios.get("http://api.artgalleryxisca.me/galeries/3/exposicions")
            .then(res => {
                const expos = res.data;
                this.setState({expos})
            })
    }

    render(){
        return(
            <div>
                <a href="/home" className="btn btn-secondary my-4 ms-2">Enrere</a>
                <FullCalendar 
                plugins = {[dayGridPlugin]}
                defaultView="dayGridMonth"
                header={{
                    left: "title",
                    right: "prev,next"
                  }}
                  events={this.state.expos}
                  />
            </div>
        );
    }
}
export default Calendar;