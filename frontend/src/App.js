//import logo from './logo.svg';
import React, { Component } from 'react';
import Galeria from "./Contents/Galeria"
import Nav from "./Component/Nav"
//import './App.css';

class App extends Component {

  constructor(props){
    super();
  }

  render(){
    return(
      <div className='App'>
        <Nav/>
        <Galeria/>
      </div>
    );
  }
}

export default App;
