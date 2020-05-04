import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import {config} from '../../../services/config';
import {api} from '../../../services/api';


import LoadingIcon  from '../../../layout/loading/LoadingIcon';


import "./assets/css/style.scss";

class CategoryIndex extends React.Component {

    state = {        
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

    
    loadingCountCategories(){
        if(this.state.categories.length)
            return this.state.categories.length;
        else
            return <LoadingIcon/>;    
    }

    loadingCategories(){
        if(this.state.categories.length)
            return '';
        else
            return <LoadingIcon/>;    
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
                            <h2 className="title-section">Categorias</h2>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
              
                                </div>
                                <div className="card-body">
                                    <p>Total de categorias</p>
                                    <p className="destaque">

                                    {this.loadingCountCategories()}
                                  
                                    </p>
                                </div>
                                <div className="card-header border-0">
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            
                        </div>



                    </div>

                    


                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h2 className="subtitle-section">Categorias</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                            <Link to={`/produtos/categorias/new`} className="btn btn-success btn-sm btn-adicionar">
                                Nova Categoria
                            </Link>&nbsp;
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            

                            <div className="card">
                                <div className="card-header border-0">
                                    {this.loadingCategories()}
                                </div>
                                <div className="card-body">
                                    <table className="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                               
                                                <th>
                                                    <b>nome</b>
                                                </th>
                                                <th>Ação</th>                                       
                                                                               
                                            </tr>
                                        </thead>
                                        <tbody>


                                        {this.state.categories.map((element, key) => {

                                            const linkEdit = '/produtos/categorias/edit/'+config.mock.companyID+'/'+element.uuid;

                                            return (
                                                <tr key={key}>
                                                   
                                                    <td>{element.title}</td>                                                    
                                                    <td>

                                                        <Link  to={linkEdit}  className="btn btn-outline-success btn-sm btn-negativar">
                                                            Editar
                                                        </Link>&nbsp;                                                        

                                                    </td>
                                                
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default CategoryIndex;