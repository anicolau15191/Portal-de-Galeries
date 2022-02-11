import React, { Component } from 'react';
import { TileLayer, MapContainer,Marker } from 'react-leaflet'
import {MarkerIcon} from './react-leaflet-icon.js';
import '../css/mapa.css'
import 'leaflet/dist/leaflet.css';



class GaleriaMap extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (this.props.galeria.map((g) =>
            <MapContainer key={1} center={[g.latitud, g.longitut]} zoom={15}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url=" https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
                />
                <Marker position={[g.latitud, g.longitut]} icon={MarkerIcon}/>
            </MapContainer>
        ));
    }
}

export default GaleriaMap;