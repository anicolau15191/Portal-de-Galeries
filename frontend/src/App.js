//import logo from './logo.svg';
import React, { Component } from 'react';
import Galeria from "./Contents/Galeria"
import Nav from "./Component/Nav"
import Tabs from './Component/Tabs';
import './App.css'


class App extends Component {

  constructor(props){
    super();
  }

  render(){
    return(
      <div className='App'>
        <Nav/>
        <Tabs>
            <div label="Perfil">
             <Galeria/>
            </div>
            <div label="Sales">
              
            </div>
            <div label="Exposicions">
              
            </div>
          </Tabs>
      </div>
    );
  }
}

export default App;
