import React, { Component } from 'react';
import Tabs from '../Component/Tabs';
import Galeria from "../Contents/Galeria"
import Exposicions from '../Contents/Exposicions';
import Exposicio from '../Component/Exposicio';
class TabsGaleria extends Component {

    render() {
        return (
            <Tabs>
                <div label="Perfil">
                    <Galeria />
                </div>
                <div label="Exposicions">
                    <Exposicions />
                </div>
            </Tabs>
        );
    }

}
export default TabsGaleria;