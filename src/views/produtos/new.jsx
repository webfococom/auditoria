import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

// import "./assets/css/style.scss";

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
                                        <Link to="/">Produtos</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Novo produto</h2>
                        </div>

                         <div className="container">
                            <form>

                             <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Nome do produto</label>
                                        <input type="text" class="form-control" placeholder="Nome do produto" value=""/>
                                        
                                      </div>

                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Imagem do produto</label><br/>
                                        <Link to={`/landing-pages`} class="btn btn-primary">Enviar Imagem</Link>

                                        </div>
                                    </div>
                              </div>

                              <div className="row">
                                
                                  <div className="col-lg-8 col-md-8 col-sm-8">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Descrição</label>                                        
                                         <textarea class="form-control" name="aboutcompany" rows="3"></textarea>
                                      </div>
                                      
                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label >Preço R$</label>
                                        <input type="text" class="form-control" placeholder="Preço" value=""/>
                                        
                                      </div>

                                  </div>
                              </div>

                               <Link to={`/landing-pages`} class="btn btn-primary">Cadastrar Produto</Link>
                              <br/>
                              <br/>

                            </form>
                        </div>

                    </div>

                    
                </div>
            </div>
        );
    }
}

export default NovaLandingPage;