
import React, { Component, Suspense } from 'react';
import { lazy } from '@loadable/component'
import { BrowserRouter as Routes, Route, useParams } from "react-router-dom";
const TabsGaleria = lazy(() => import('./Component/TabsGaleria'));
const Nav = lazy(() => import('./Component/Nav'));
const Cercador = lazy(() => import('./Component/Cercador'));
const Calendar = lazy(() => import('./Component/Calendar'));
const Compra = lazy(() => import('./Component/Compra'));
const Exposicio = lazy(() => import('./Component/Exposicio'));
const CompraOk = lazy(() => import('./Contents/CompraOk'));
const renderLoader = () => <p>Loading</p>;
/*import TabsGaleria from './Component/TabsGaleria';
import Nav from "./Component/Nav"
import Cercador from "./Component/Cercador";
import Calendar from "./Component/Calendar";
import Compra from './Component/Compra'
import Exposicio from './Component/Exposicio'
import CompraOk from './Contents/CompraOk';
import './App.css'*/



class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
       <div>
        
          <Routes>
          <Suspense fallback={renderLoader()}>
            <Route path="/" component={Nav} />
            <Route path="/home" component={Cercador} />
            <Route path="/calendari" component={Calendar} />
            <Route path="/Galeria/:idGaleria" component={TabsGaleria} />
            <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
            <Route path="/Compra/:nom/:id" component={Compra} />
            <Route path="/valid/:nom/:preu/:pedido" component={CompraOk} />
            </Suspense>
          </Routes>
        
     </div>
    
    );
  }
}

export default App;