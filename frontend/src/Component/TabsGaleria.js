import React, { Component } from 'react';
import Tabs from '../Component/Tabs';
import Galeria from "../Contents/Galeria"
import Exposicions from '../Contents/Exposicions';
class TabsGaleria extends Component {

    render() {
        return (
            <Tabs>
                <div label="Perfil">
                    <Galeria id={this.props.match.params.idGaleria}/>
                </div>
                <div label="Exposicions">
                    <Exposicions id={this.props.match.params.idGaleria} />
                </div>
            </Tabs>
        );
    }

}
export default TabsGaleria;