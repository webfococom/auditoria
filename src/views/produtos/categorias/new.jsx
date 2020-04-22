import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import {api} from '../../../services/api';
import {config} from '../../../services/config';
import {slugify} from '../../../services/strings.js';

import "./assets/css/style.scss";

class CategoryNew extends React.Component {

    state = {
        category: {}
    };

 
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
    }



    createCategory = (e) =>{ 
       e.preventDefault();

        let formData = this.state.category;

        delete formData['uuid'];
        delete formData['updated_at'];
        delete formData['created_at'];
        delete formData['category_id'];
 
        formData['account_id'] = config.mock.accountID;
        formData['company_id'] = config.mock.companyID;
        formData['parent'] = 0;



        const resp = api.post('/categories/', 
            JSON.stringify(formData))
        .then((resp) => resp.data)
        .then((resp) => this.props.history.push('/produtos/categorias') );
    
   }


   handleChange = (e) =>{ 
        let category = this.state.category;
        category[e.target.name] = e.target.value;

        if(e.target.name === 'title' || e.target.name === 'url'){
          category.url = slugify(e.target.value);
        }

        this.setState({category});
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
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/produtos/categorias">Categorias</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Nova Categoria</h2>
                        </div>

                         <div className="container">
                            <form>

                             <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Nome</label>
                                        <input type="text" class="form-control" placeholder="Nome" name="title" value={this.state.category.title} onChange={this.handleChange} />
                                        
                                      </div>

                                  </div>
                              </div>


                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                        
                                      <div class="form-group">
                                        <label >URL</label>
                                        <input type="text" class="form-control" placeholder="URL" name="url" value={this.state.category.url} onChange={this.handleChange}/>
                                        
                                      </div>

                                  </div>
                              </div>

                              <button type="buttom" onClick={this.createCategory} class="btn btn-success">Cadastrar categoria</button>

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

export default CategoryNew;