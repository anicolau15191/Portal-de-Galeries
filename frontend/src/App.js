
import React, { Component, Suspense } from 'react';
import { lazy } from '@loadable/component'
import { BrowserRouter as Router, Route, useParams, HashRouter } from "react-router-dom";
import { LocaleContext } from "./LocaleContext";
import 'bootstrap/dist/css/bootstrap.min.css';
const TabsGaleria = lazy(() => import('./Component/TabsGaleria'));
const Nav = lazy(() => import('./Component/NavBar'));
const Cercador = lazy(() => import('./Component/Cercador'));
const Calendar = lazy(() => import('./Component/Calendar'));
const Compra = lazy(() => import('./Component/Compra'));
const Exposicio = lazy(() => import('./Component/Exposicio'));
const CompraOk = lazy(() => import('./Contents/CompraOk'));
const Reserves = lazy(()=>import('./Component/Reserves'));
const Footer = lazy(()=>import('./Component/Footer'));
const renderLoader = () => <p>Loading</p>;



class App extends Component {

  constructor(props) {
    super();
    this.state = {
      preferredLocale: "ca"
    };
  }

  changeLanguage = ({ currentTarget: { id } }) => {
    this.setState({
      preferredLocale: id
    });
  };


  render() {
    return (

      <LocaleContext.Provider value={this.state.preferredLocale}>
        <Router>
          <Suspense fallback={renderLoader()}>
            <div>
              <Route path="/" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/home" component={Cercador} />
              <Route path="/home" component={Footer} />
              <Route path="/reserves/:idExpo" component={Reserves} />
              <Route path="/reserves/:idExpo" component={Footer} />
              <Route path="/calendari" component={Calendar} />
              <Route path="/calendari" component={Footer} />
              <Route path="/Galeria/:idGaleria" render={() => <TabsGaleria changeLanguage={this.changeLanguage} idioma={this.state.preferredLocale}/> } />
              <Route path="/Galeria/:idGaleria" component={Footer} />
              <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
              <Route path="/Exposicio/:nom/:id/:idGaleria" component={Footer} />
              <Route path="/Compra/:nom/:id" component={Compra} />
              <Route path="/Compra/:nom/:id" component={Footer} />
              <Route path="/valid/:nom/:preu/:pedido" component={CompraOk} />
            </div>
          </Suspense>
        </Router>
      </LocaleContext.Provider>

    );
  }
}

export default App;