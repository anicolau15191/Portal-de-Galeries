
import React, { Component, Suspense } from 'react';
import { lazy } from '@loadable/component'
import { BrowserRouter as Router, Route, useParams, HashRouter } from "react-router-dom";
import { LocaleContext } from "./LocaleContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Component/NavBar';
const TabsGaleria = lazy(() => import('./Component/TabsGaleria'));
const Nav = lazy(() => import('./Component/NavBar'));
const Registre = lazy(()=> import('./Component/Registre'));
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
      preferredLocale: "ca",
      user:""
    };
  }

  changeLanguage = ({ currentTarget: { id } }) => {
    this.setState({
      preferredLocale: id
    });
  };


  render() {
    return (

      <UserContext.Provider value={this.state.user}>
      <LocaleContext.Provider value={this.state.preferredLocale}>
        <Router>
          <Suspense fallback={renderLoader()}>
            <div>
              <Route exact path="/" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route exact path="/" component={Cercador} />
              <Route exact path="/" component={Footer} />
              <Route path="/register" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/register" component={Registre} />
              <Route path="/reserves/:idExpo" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/reserves/:idExpo" component={Reserves} />
              <Route path="/reserves/:idExpo" component={Footer} />
              <Route path="/calendari" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/calendari" component={Calendar} />
              <Route path="/calendari" component={Footer} />
              <Route path="/Galeria/:idGaleria" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/Galeria/:idGaleria" render={() => <TabsGaleria changeLanguage={this.changeLanguage} idioma={this.state.preferredLocale}/> } />
              <Route path="/Galeria/:idGaleria" component={Footer} />
              <Route path="/Exposicio/:nom/:id/:idGaleria" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
              <Route path="/Exposicio/:nom/:id/:idGaleria" component={Footer} />
              <Route path="/Compra/:nom/:id" render={() => <Nav changeLanguage={this.changeLanguage}/> }/>
              <Route path="/Compra/:nom/:id" component={Compra} />
              <Route path="/Compra/:nom/:id" component={Footer} />
              <Route path="/valid/:nom/:preu/:pedido" component={CompraOk} />
            </div>
          </Suspense>
        </Router>
      </LocaleContext.Provider>
      </UserContext.Provider>

    );
  }
}

export default App;