import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import "./assets/css/style.scss";

class NovaLandingPage extends React.Component {
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
                                        <Link to="/">Landing Page</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Nova Landing Page</h2>
                        </div>

                        <div className="container">
                            <form>

                             <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Nome</label>
                                        <input type="text" class="form-control" placeholder="Nome"/>
                                        <small class="form-text text-muted">Insira um nome para identificação da landing page</small>
                                      </div>

                                  </div>
                              </div>

                              <div className="row">
                               
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Endereço</label>
                                        <input type="text" class="form-control" placeholder="Endereço"/>
                                        <small class="form-text text-muted">Insira um endereço personalizado</small>
                                      </div>
                                      
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Diferenciais</label>
                                        <input type="text" class="form-control" placeholder="Mensagem Whatsapp"/>
                                        <small class="form-text text-muted">Insira os diferenciais</small>
                                      </div>
                                      
                                  </div>
                              </div>

                              <div className="row">
                                
                                  <div className="col-lg-8 col-md-8 col-sm-8">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Sobre a empresa</label>                                        
                                         <textarea class="form-control" name="aboutcompany" rows="3"></textarea>
                                      </div>
                                      
                                  </div>
                              </div>

                              <div class="form-group">
                                <label for="exampleInputEmail1">Thema</label>
                                
                                <div className="row">
                             
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className="card card-home">
                                            <div className="card-header border-0">
                                                
                                            </div>
                                            <div className="card-body">
                                                <p>Modelo</p>
                                                <p className="destaque">Lead</p>
                                                <div class="modellp">
                                                    <img src={`${process.env.PUBLIC_URL}/landingpage/assets/img/model1.png`}  /> 
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="button" className="btn btn-outline-success btn-sm float-right">
                                                    Escolher
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className="card card-home">
                                            <div className="card-header border-0">
                                                
                                            </div>
                                            <div className="card-body">
                                                <p>Modelo</p>
                                                <p className="destaque">Shop</p>
                                                <div class="modellp">
                                                    <img src={`${process.env.PUBLIC_URL}/landingpage/assets/img/model2.png`}  /> 
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="button" className="btn btn-outline-success btn-sm float-right">
                                                    Escolher
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <small class="form-text text-muted">Escolha um tema para esta landing page</small>
                              </div>
                         
                            </form>
                              <Link to={`/landing-pages`} class="btn btn-primary">Criar</Link>
                              <br/>
                              <br/>
                        </div>

                    </div>

                    
                </div>
            </div>
        );
    }
}

export default NovaLandingPage;