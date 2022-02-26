import React, { Component,Suspense } from 'react';
import { lazy } from '@loadable/component'
const Tabs = lazy(() => import('../Component/Tabs'));
const Galeria = lazy(() => import('../Contents/Galeria'));
const Exposicions = lazy(() => import('../Contents/Exposicions'));
const renderLoader = () => <p>Loading</p>;

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