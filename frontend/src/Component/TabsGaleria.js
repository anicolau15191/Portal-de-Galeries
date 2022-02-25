import React, { Component, lazy, Suspense } from 'react';
const Tabs = lazy(() => import('../Component/Tabs'));
const Galeria = lazy(() => import('../Contents/Galeria'));
const Exposicions = lazy(() => import('../Contents/Exposicions'));
const renderLoader = () => <p>Loading</p>;
/*import Tabs from '../Component/Tabs';
import Galeria from "../Contents/Galeria"
import Exposicions from '../Contents/Exposicions';*/
class TabsGaleria extends Component {

    render() {
        return (
            <Suspense fallback={renderLoader()}>
                <Tabs>
                    <div label="Perfil">
                        <Galeria id={this.props.match.params.idGaleria} />
                    </div>
                    <div label="Exposicions">
                        <Exposicions id={this.props.match.params.idGaleria} />
                    </div>
                </Tabs>
            </Suspense>
        );
    }

}
export default TabsGaleria;