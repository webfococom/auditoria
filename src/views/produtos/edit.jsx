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
                            <h2 className="title-section">Editar produto</h2>
                        </div>

                         <div className="container">
                            <form>

                             <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Nome do produto</label>
                                        <input type="text" class="form-control" placeholder="Nome do produto" value="Cielo Flash"/>
                                        
                                      </div>

                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Imagem do produto</label><br/>
                                        <Link to={`/landing-pages`} class="btn btn-primary">Inviar Imagem</Link>

                                        </div>
                                    </div>
                              </div>

                              <div className="row">
                                
                                  <div className="col-lg-8 col-md-8 col-sm-8">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Descrição</label>                                        
                                         <textarea class="form-control" name="aboutcompany" rows="3">
                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                         </textarea>
                                      </div>
                                      
                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label >Preço R$</label>
                                        <input type="text" class="form-control" placeholder="Preço" value="418,80"/>
                                        
                                      </div>

                                  </div>
                              </div>

                               <Link to={`/landing-pages`} class="btn btn-primary">Atualizar Produto</Link>
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