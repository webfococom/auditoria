import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import LoadingIcon  from '../../layout/loading/LoadingIcon';

import {api} from '../../services/api';
import {config} from '../../services/config';

import "./assets/css/style.scss";

class Product extends React.Component {

    state = {       
        companyID:'97c1adfc-18a1-4f18-bfae-9a6b2edc2210',
        products: []
    };

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts(){
        let self = this;
        let companyID = this.state.companyID;
        const resp = await api.get('/products/'+companyID, {})
        .then((resp) => resp.data)

        // captura o nome da categoria do produto
        .then( async function(resp){
            for(var key in resp){
                var element = resp[key];
                var category = await self.getCategoryItem(element.category_id);            
                    resp[key].categoryName = category.title;
            }
            return resp;
        })

        .then( (products) => this.setState({products}) );
    }

   async getCategoryItem(categoryID){
        let companyID = this.state.companyID;

        try {
            const resp = await api.get('/categories/'+companyID+'/'+categoryID, {})
            .then((resp) => resp.data)
            .then( function(response){
                return (response);
            });
            return resp;
        } catch (error) {
          return {title:""};
        }
    }

    
    loadingCountProducts(){
        if(this.state.products.length)
            return this.state.products.length;
        else
            return <LoadingIcon/>;    
    }

    loadingProducts(){
        if(this.state.products.length)
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
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Meus Produtos Cadastrados</h2>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
              
                                </div>
                                <div className="card-body">
                                    <p>Total de produtos</p>
                                    <p className="destaque">

                                    {this.loadingCountProducts()}
                                  
                                    </p>
                                </div>
                                <div className="card-header border-0">
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                
                                </div>
                                <div className="card-body">
                                    <p>Produtos Publicados</p>
                                    <p className="destaque">1</p>
                                </div>
                                <div className="card-header border-0">
                                  
                                </div>
                            </div>
                        </div>



                    </div>

                    


                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h2 className="subtitle-section">Produtos</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                            <Link to={`/produtos/new`} className="btn btn-success btn-sm btn-adicionar">
                                Novo Produto
                            </Link>&nbsp;
                            <Link to={`/produtos/anuncio/new`}  className="btn btn-success btn-sm btn-adicionar">
                                Publicar no Google
                            </Link>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            

                            <div className="card">
                                <div className="card-header border-0">
                                    {this.loadingProducts()}
                                </div>
                                <div className="card-body">
                                    <table className="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <b>nome</b>
                                                </th>
                                                <th>
                                                    <b>Categoria</b>
                                                </th>
                                                <th>
                                                    <b>Preço</b>
                                                </th>
                                               
                                                
                                               

                                                <th>Ação</th>                                       
                                                                               
                                            </tr>
                                        </thead>
                                        <tbody>


                                        {this.state.products.map((element, key) => {

                                            const images = JSON.parse(element.image);

                                            const itemImage = images[0];

                                            let img = '';

                                            if(itemImage === undefined)
                                                img = ' ';
                                            else
                                                img = config.product.storageUrl+'/products/'+element.uuid+'/'+itemImage;
                                          
                                            const linkEdit = '/produtos/edit/'+this.state.companyID+'/'+element.uuid;
                                            const linkUrl = element.url;

                                            return (
                                                <tr key={key}>
                                                    <td class="thumb"  >
                                                        

                                                    <img src={img}/>
                                                     
                                                    </td>
                                                    <td>{element.title}</td>
                                                    <td>{element.categoryName}</td>
                                                    <td>R$ {element.price}</td>                                                                                                       
                                                    <td>

                                                        <Link  to={linkEdit}  className="btn btn-outline-success btn-sm btn-negativar">
                                                            Editar
                                                        </Link>&nbsp;
                                                        <Link  to={linkUrl}  className="btn btn-success btn-sm btn-adicionar">
                                                            Visualizar
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

export default Product;