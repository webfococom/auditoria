import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';



let landingpages = [
    {
        nome: 'Maquina de cartão com bobina',
        route: 'edit',
        visitas: 1234,
        leads: 1897,
    },
    {
        nome: 'Maquina de cartão sem bobina',
        route: 'edit',
        visitas: 29856,
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
                                        <Link to="/">Landing Page</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Visão Geral</h2>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                   {/* <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />*/}
                                </div>
                                <div className="card-body">
                                    <p>Total de visitas</p>
                                    <p className="destaque">31090</p>
                                </div>
                                <div className="card-footer">
                                  
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                  {/*  <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />*/}
                                </div>
                                <div className="card-body">
                                    <p>Total de leads</p>
                                    <p className="destaque">11090</p>
                                </div>
                                <div className="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                   {/* <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />*/}
                                </div>
                                <div className="card-body">
                                    <p>LPs Criadas</p>
                                    <p className="destaque">2</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm float-right">
                                        Criar nova
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>

                    


                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="subtitle-section">Landing Pages</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header border-0"></div>
                                <div className="card-body">
                                    <table className="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b>nome</b>
                                                </th>
                                                <th>
                                                    <b>visitas</b>
                                                </th>
                                               
                                                <th>
                                                    <b>leads</b>
                                                </th>     

                                                <th>Ação</th>                                       
                                                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {landingpages.map((element, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{element.nome}</td>
                                                    <td>{element.visitas}</td>                                                    
                                                    <td>{element.leads}</td>                                                    
                                                 
                                                    <td>

                                                        <Link  to={`/landing-pages/${element.route}`}  className="btn btn-outline-success btn-sm btn-negativar">
                                                            Editar
                                                        </Link>&nbsp;

                                                        <a target="_blank" href="http://webfocosaopaulo.com.br/adsapp/lp/model1/" className="btn btn-success btn-sm btn-adicionar">
                                                            Visualizar
                                                        </a>

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