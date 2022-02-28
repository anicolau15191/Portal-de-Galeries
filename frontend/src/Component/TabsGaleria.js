import React, { Component,Suspense } from 'react';
import { lazy } from '@loadable/component'
import { withRouter} from 'react-router-dom';
import Translate from "./local/Translate";
const Tabs = lazy(() => import('../Component/Tabs'));
const Galeria = lazy(() => import('../Contents/Galeria'));
const Exposicions = lazy(() => import('../Contents/Exposicions'));
const renderLoader = () => <p>Loading</p>;

class TabsGaleria extends Component {

    constructor(props) {
        super();
        
      }

    render() {
        return (
            <Suspense fallback={renderLoader()}>
                <Tabs>
                    <div label="Perfil">
                        <Galeria id={this.props.match.params.idGaleria} idioma={this.props.idioma}/>
                    </div>
                    <div label={<Translate string={'exposicions'}/>}>
                        <Exposicions id={this.props.match.params.idGaleria} idioma={this.props.idioma} />
                    </div>
                </Tabs>
            </Suspense>
        );
    }

}
export default  withRouter(TabsGaleria);