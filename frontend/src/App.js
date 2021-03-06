
import React, { Component, Suspense } from 'react';
import { lazy } from '@loadable/component'
import { BrowserRouter as Router, Route, useParams, HashRouter } from "react-router-dom";
import { LocaleContext } from "./LocaleContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Component/NavBar';
const TabsGaleria = lazy(() => import('./Component/TabsGaleria'));
const Nav = lazy(() => import('./Component/NavBar'));
const Registre = lazy(() => import('./Component/Registre'));
const Cercador = lazy(() => import('./Component/Cercador'));
const Calendar = lazy(() => import('./Component/Calendar'));
const Compra = lazy(() => import('./Component/Compra'));
const Exposicio = lazy(() => import('./Component/Exposicio'));
const CompraOk = lazy(() => import('./Contents/CompraOk'));
const Reserves = lazy(() => import('./Component/Reserves'));
const Footer = lazy(() => import('./Component/Footer'));
const renderLoader = () => <p>Loading</p>;



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preferredLocale: "ca",
      user: ""
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user){
    this.setState({user:user})
  }

  logout(){
    this.setState({user:""})
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
                <Route exact path="/" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout} changeLanguage={this.changeLanguage} />} />
                <Route exact path="/" component={Cercador} />
                <Route exact path="/" component={Footer} />
                <Route path="/register" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout}  changeLanguage={this.changeLanguage} />} />
                <Route path="/register" component={Registre} />
                <Route path="/reserves/:idExpo" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout}  changeLanguage={this.changeLanguage} />} />
                <Route path="/reserves/:idExpo/" render={() => <Reserves user={this.state.user} />} />
                <Route path="/reserves/:idExpo" component={Footer} />
                <Route path="/calendari" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout}  changeLanguage={this.changeLanguage} />} />
                <Route path="/calendari" component={Calendar} />
                <Route path="/calendari" component={Footer} />
                <Route path="/Galeria/:idGaleria" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout} changeLanguage={this.changeLanguage} />} />
                <Route path="/Galeria/:idGaleria" render={() => <TabsGaleria changeLanguage={this.changeLanguage} idioma={this.state.preferredLocale} />} />
                <Route path="/Galeria/:idGaleria" component={Footer} />
                <Route path="/Exposicio/:nom/:id/:idGaleria" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout}  changeLanguage={this.changeLanguage} />} />
                <Route path="/Exposicio/:nom/:id/:idGaleria" component={Exposicio} />
                <Route path="/Exposicio/:nom/:id/:idGaleria" component={Footer} />
                <Route path="/Compra/:nom/:id" render={() => <Nav user={this.state.user} login={this.login} logout={this.logout}  changeLanguage={this.changeLanguage} />} />
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