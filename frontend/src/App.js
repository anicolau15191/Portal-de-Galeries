//import logo from './logo.svg';
import React, { Component } from 'react';
import Galeria from "./Contents/Galeria"
import Exposicions from './Contents/Exposicions';
import Nav from "./Component/Nav"
import Tabs from './Component/Tabs';
import Exposicio from './Component/Exposicio'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Galeria" element={
          <Tabs>
            <div label="Perfil">
              <Galeria />
            </div>
            <div label="Exposicions">
              <Exposicions />
            </div>
          </Tabs>} />
          <Route path="/Exposicio/:id" element={<Exposicio />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
