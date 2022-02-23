import React, { Component } from 'react';
import CardGaleria from '../Contents/CardGaleria';
import Search from '../Contents/Search';

class Cercador extends Component{

    render(){
        return(
            <div>
                <h1 className="text-center">Art Gallery</h1>
                <Search></Search>
                <CardGaleria></CardGaleria>
            </div>
        );
    }
}
export default Cercador;
