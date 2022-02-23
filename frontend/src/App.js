import React, { Component } from 'react';
import TabsGaleria from './Component/TabsGaleria';
import Nav from "./Component/Nav"
import Exposicio from './Component/Exposicio';
import Cercador from "./Component/Cercador";
import Calendar from "./Component/Calendar";
import './App.css';
import { BrowserRouter as Router, Route , useParams} from "react-router-dom";


class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      
        <Router>
          <Route path="/" component={Nav} />
          <Route path="/home" component={Cercador} />
          <Route path="/calendari" component={Calendar} />
          <Route path="/Galeria" component={TabsGaleria} />
          <Route path="/Exposicio/:nom/:id" component={Exposicio} />
        </Router>
      
    );
  }
}

export default App;
