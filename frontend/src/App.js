
import React, { Component } from 'react';
import TabsGaleria from './Component/TabsGaleria';
import Nav from "./Component/Nav"
import Compra from './Component/Compra'
import Exposicio from './Component/Exposicio'
import './App.css'
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Nav} />
          <Route path="/Galeria/:idGaleria" component={TabsGaleria} />
          <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
          <Route path="/Compra/:nom/:id/:idGaleria/:nomExpo/:idExpo" component={Compra} />
        </Router>
      </div>


    );
  }
}

export default App;