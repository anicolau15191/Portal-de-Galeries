import axios from 'axios';
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, CardHeader
} from 'reactstrap';
import { Link } from "react-router-dom";
const FOTO = 'https://www.api.artgalleryxisca.me/foto';
class CardGaleria extends Component {
    static defaultProps = {
        galeria:{}
    }

    render() {
        return (
            <Col className="mb-2" lg="3" sm="6" key={this.props.galeria.id_galeria}>
                <Card className="card rounded h-100 border-0">
                    <CardImg style={{ height: 300, objectFit: 'cover' }} className="img-fluid rounded-start" alt="..."
                        src={FOTO +'/'+ this.props.galeria.id_galeria + '/' + this.props.galeria.id_galeria + '-1'}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = '../default.jpg'
                        }} />
                    {/*<CardHeader className="rounded p-0 m-0">
                        <picture>
                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + galeria.id_galeria + '/' + galeria.id_galeria + '-1'}/>
                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + galeria.id_galeria + '/' + galeria.id_galeria + '-2'}/>
                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + galeria.id_galeria + '/' + galeria.id_galeria + '-3'}/>
                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + galeria.id_galeria + '/' + galeria.id_galeria + '-4'}/>
                            <img style={{ height: 300, objectFit: 'cover' }} className="img-fluid rounded-start" src="../default.jpg" alt="default"></img>
                        </picture>
                    </CardHeader>*/}
                    <CardBody className="card-body">
                        <CardTitle className="text-center"><h5>{this.props.galeria.nom}</h5></CardTitle>
                        <CardText></CardText>
                    </CardBody>
                    <Link to={"/Galeria/" + this.props.galeria.id_galeria} className="text-decoration-none stretched-link"></Link>
                </Card>
            </Col>
        );
    }
}
export default CardGaleria;