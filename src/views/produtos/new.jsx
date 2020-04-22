import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import {config} from '../../services/config';
import {api} from '../../services/api';
import {slugify} from '../../services/strings.js';

class ProductNew extends React.Component {

    state = {
        categoryID:'0',
        product: {},
        categories: []
    };

 
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories(){
        let companyID = config.mock.companyID;
        const resp = api.get('/categories/'+companyID, {})
        .then((resp) => resp.data)
        .then( (categories) => this.setState({categories}) );
    }

    createProduct = (e) =>{ 

       e.preventDefault();

        let accountID = config.mock.accountID;
        let companyID = config.mock.companyID;
        let formData = this.state.product;

        formData['account_id'] = accountID;

        delete formData['uuid'];
        delete formData['updated_at'];
        delete formData['created_at'];
        delete formData['company_id'];
        // delete formData['category_id'];
        // delete formData['account_id'];

        const resp = api.post('/products/'+companyID, 
            JSON.stringify(this.state.product))
        .then((resp) => resp.data)
        .then((resp) => this.props.history.push('/produtos') );
    
   }


   handleChange = (e) =>{ 
        let product = this.state.product;
        product[e.target.name] = e.target.value;

        if(e.target.name === 'title' || e.target.name === 'url'){
          product.url = slugify(e.target.value);
        }

        this.setState({product});
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
                                        <Link to="/produtos">Meus Produtos</Link>
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
                                        <input type="text" class="form-control" placeholder="Nome do produto" name="title" value={this.state.product.title} onChange={this.handleChange} />
                                        
                                      </div>

                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Imagem do produto</label><br/>
                                        <Link to={`/landing-pages`} class="btn btn-success">Enviar Imagem</Link>

                                        </div>
                                    </div>
                              </div>

                              <div className="row">
                                
                                  <div className="col-lg-8 col-md-8 col-sm-8">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Descrição</label>                                        
                                         <textarea class="form-control" name="aboutcompany" rows="3" name="description" value={this.state.product.description} onChange={this.handleChange} ></textarea>
                                      </div>
                                      
                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                      
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Categoria</label>  
                                        <select class="browser-default custom-select" name="category_id" value={this.state.product.category_id} onChange={this.handleChange} >
                                          <option value="" disabled selected>Categoria</option>

                                          {this.state.categories.map((element, key) => {

                                          return (
                                             <option value={element.uuid}>{element.title}</option>
                                             
                                          )

                                        })}

                                        </select>
                                      </div>

                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label >Preço R$</label>
                                        <input type="text" class="form-control" placeholder="Preço" name="price" value={this.state.product.price} onChange={this.handleChange}/>
                                        
                                      </div>

                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label >URL do produto</label>
                                        <input type="text" class="form-control" placeholder="Preço" name="url" value={this.state.product.url} onChange={this.handleChange}/>
                                        
                                      </div>

                                  </div>
                              </div>

                              <button type="buttom" onClick={this.createProduct} class="btn btn-success">Cadastrar Produto</button>

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

export default ProductNew;