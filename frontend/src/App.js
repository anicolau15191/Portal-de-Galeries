
import React, { Component } from 'react';
import TabsGaleria from './Component/TabsGaleria';
import Nav from "./Component/Nav"
import Cercador from "./Component/Cercador";
import Calendar from "./Component/Calendar";
import Compra from './Component/Compra'
import Exposicio from './Component/Exposicio'
import CompraOk from './Contents/CompraOk';
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
          <Route path="/home" component={Cercador} />
          <Route path="/calendari" component={Calendar} />
          <Route path="/Galeria/:idGaleria" component={TabsGaleria} />
          <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
          <Route path="/Compra/:nom/:id" component={Compra} />
          <Route path="/valid/:nom/:preu/:pedido" component={CompraOk} />
        </Router>
      </div>


    );
  }
}

export default App;