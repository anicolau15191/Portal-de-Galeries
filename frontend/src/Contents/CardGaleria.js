import axios from 'axios';
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, CardHeader
} from 'reactstrap';
import { Link} from "react-router-dom";
import image from '../default.jpg';

class CardGaleria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galeria: []
        }
    }

    componentDidMount() {
        axios.get("http://api.artgalleryxisca.me/galeries")
            .then(res => {
                const galeria = res.data;
                this.setState({ galeria });
            })
    }

    render() {
        
    return (
            <div>
                <Container id="galeria" className="mt-3">
                    <Row>
                        {this.state.galeria.map((gallery) => (
                            <Col className="col-md-3 col-sm-2 mb-2" key={gallery.id_galeria}>
                                <Card className="card rounded h-100 border-0">
                                    <CardImg style={{ height: 300, objectFit: 'cover' }} className="img-fluid rounded-start"
                                    src={'http://admin.artgalleryxisca.me:8080/imggaleria/' + gallery.id_galeria + '/' + gallery.id_galeria + '-1'}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                    currentTarget.src='../default.jpg'}}/>
                                    {/*<CardHeader className="rounded p-0 m-0">
                                        <picture>
                                            <source type="image/jpeg" style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + gallery.id_galeria + '/' + gallery.id_galeria + '-1'}/>
                                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + gallery.id_galeria + '/' + gallery.id_galeria + '-2'}/>
                                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + gallery.id_galeria + '/' + gallery.id_galeria + '-3'}/>
                                            <source style={{ height: 300, objectFit: 'cover',width:400}} className="img-fluid rounded-start" srcSet={'http://admin.artgalleryxisca.me:8080/imggaleria/' + gallery.id_galeria + '/' + gallery.id_galeria + '-4'}/>
                                            <img style={{ height: 300, objectFit: 'cover' }} className="img-fluid rounded-start" src="../default.jpg" alt="default"></img>
                                        </picture>
                                    </CardHeader>*/}
                                    <CardBody className="card-body">
                                        <CardTitle className="text-center"><h5>{gallery.nom}</h5></CardTitle>
                                        <CardText></CardText>
                                    </CardBody>
                                    <Link to={"/Galeria/"+gallery.id_galeria} className="text-decoration-none stretched-link"></Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default CardGaleria;