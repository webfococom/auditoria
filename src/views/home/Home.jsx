import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';



class GoogleAds extends React.Component {
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
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/">Minhas Soluções</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Dashboard</h2>
                        </div>
                    </div>

                     <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Produtos criados</p>
                                    <p>
                                        <span className="destaque">50</span>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/produtos" type="button" className="btn btn-outline-success btn-sm float-right">
                                        ver mais
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Google Meu negócio</p>
                                    <p>
                                        <span className="destaque">1</span><small>/1000 visitas no mapa</small>
                                    </p>

                                </div>
                                <div className="card-footer">
                                    <Link to="google-meu-negocio/locais" type="button" className="btn btn-outline-success btn-sm float-right">
                                        ver mais
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>LP criadas</p>
                                    <p>
                                        <span className="destaque">2</span><small>/10k visitas</small>
                                    </p>

                                </div>
                                <div className="card-footer border-0">
                                    <Link to="landing-pages" type="button" className="btn btn-outline-success btn-sm float-right">
                                        ver mais
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

{/**/}

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Anuncios Google shopping</p>
                                    <p>
                                        <span className="destaque">1000</span> <small>Visitas</small>
                                    </p>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Anuncios Google Pesquisa</p>
                                    <p>
                                        <span className="destaque">1000</span> <small>visualizações</small>
                                    </p>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Contatos Gerados</p>
                                    <p>
                                        <span className="destaque">5300</span>
                                    </p>

                                    <br/>

                                </div>
                            </div>
                        </div>

                        
                    </div>


                    
                </div>
            </div>
        );
    }
}

export default GoogleAds;