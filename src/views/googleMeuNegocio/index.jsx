import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faShareAlt, faMapMarkerAlt, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

class GoogleMeuNegocio extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="content-header content-ads">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-auditoria">
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/">Home</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Google Meu Negocio</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-GMB">
                                <div className="card-header border-0">
                                    <p>Sua empresa está no google</p>
                                </div>
                                <div className="card-body container-share-company">
                                    <ul>
                                        <li>
                                            <Link >
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                    className="fa-pull-left"
                                                /> Ver no Google Maps
                                            </Link>
                                        </li>
                                        <li>
                                            <Link >
                                                <FontAwesomeIcon
                                                    icon={faGoogle}
                                                    className="fa-pull-left"
                                                /> Ver na Pesquisa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link >
                                                <FontAwesomeIcon
                                                    icon={faShareAlt}
                                                    className="fa-pull-left"
                                                /> Compartilhar Perfil da empresa
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="card-footer"></div> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-GMB">
                                <div className="card-header border-0">
                                    <p>Receba mais avaliações</p>
                                </div>
                                <div className="card-body">
                                    <p className="texto-compartilhamento-form">Compartilhe o perfil da sua empresa e receba novas avaliações dos clientes</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-share-form btn-sm float-left">
                                        Compart. form. de avaliação
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-GMB">
                                <div className="card-header border-0">
                                    <p>Desempenho</p>
                                </div>
                                <div className="card-body">
                                    <div className="container-info-desempenho">
                                        <div className="title-info-desempenho active">
                                            <p className="title">Visualizações</p>
                                            <p className="value">3,55 mil</p>
                                        </div>
                                        <div className="title-info-desempenho">
                                            <p className="title">Pesquisa</p>
                                            <p className="value">3,09 mill</p>
                                        </div>
                                        <div className="title-info-desempenho">
                                            <p className="title">Atividade</p>
                                            <p className="value">529</p>
                                        </div>
                                    </div>

                                    <div className="container-valores-desempenho">
                                        <ul>
                                            <li>Visualizações de pesquisa <span>782 <span className="red">(-1%)</span></span></li>
                                            <li>Visualizações no Maps <span>2,77 mil <span className="red">(-43%)</span></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p>
                                        Desempenho nos últimos 28 dias
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-GMB">
                                <div className="card-header border-0">
                                    <p>Fotos mais recentes dos clientes</p>
                                </div>
                                <div className="card-body">
                                    <div className="container-fotos">
                                        <div className="item-foto">
                                            <img src={require('../../assets/images/cabelo4.jpg')} alt=""/>
                                        </div>
                                        <div className="item-foto">
                                            <img src={require('../../assets/images/cabelo5.jpg')} alt=""/>
                                        </div>
                                        <div className="item-foto">
                                            <img src={require('../../assets/images/cabelo6.png')} alt=""/>
                                        </div>
                                        <div className="item-foto">
                                            <img src={require('../../assets/images/cabelo7.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer button-fotos">
                                    <Link>
                                        Gerenciar fotos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default GoogleMeuNegocio;