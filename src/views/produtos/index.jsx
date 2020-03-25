import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import "./assets/css/style.scss";

let landingpages = [
    {
        nome: 'Cielo FLASH',
        route: 'edit',
        thumb: 'cieloflash.jpg',
        price: '418,80',
        leads: 1897,
    },
    {
        nome: 'Maquina de cartão sem bobina',
        route: 'edit',
        thumb: 'cielozip.jpg',
        price: '298,80',
        leads: 2985,
    }
]

class LandingPages extends React.Component {
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
                            <h2 className="title-section">Listagem</h2>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
              
                                </div>
                                <div className="card-body">
                                    <p>Total de produtos</p>
                                    <p className="destaque">2</p>
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
                                Publicar
                            </Link>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            

                            <div className="card">
                                <div className="card-header border-0"></div>
                                <div className="card-body">
                                    <table className="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <b>nome</b>
                                                </th>
                                                <th>
                                                    <b>Preço</b>
                                                </th>
                                               
                                                
                                               

                                                <th>Ação</th>                                       
                                                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {landingpages.map((element, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td class="thumb">
                                                     
                                                        <img src={`${process.env.PUBLIC_URL}/uploads/products/${element.thumb}`}  /> 
                                                     
                                                    </td>
                                                    <td>{element.nome}</td>
                                                    <td>R$ {element.price}</td>                                                                                                       
                                                    <td>

                                                        <Link  to={`/produtos/${element.route}`}  className="btn btn-outline-success btn-sm btn-negativar">
                                                            Editar
                                                        </Link>&nbsp;
                                                        <Link  className="btn btn-success btn-sm btn-adicionar">
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

export default LandingPages;