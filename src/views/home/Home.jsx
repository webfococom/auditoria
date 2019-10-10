import React from "react";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

let campanhas = [
    {
        nome: 'Campanha A',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'red',
    },
    {
        nome: 'Campanha B',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    },
    {
        nome: 'Campanha C',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    },
    {
        nome: 'Campanha D',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'red',
    },
    {
        nome: 'Campanha E',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    }
];

class Home extends React.Component {
    render() {
        return (
            <div className="content-header content-ads">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-auditoria">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Visão Geral</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Painel da Campanha</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="m-0 title-section">Visão Geral</h2>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="card">
                                <div class="card-header border-0">
                                    <FontAwesomeIcon icon={faQuestion} />
                                </div>
                                <div class="card-body">
                                    <h2>Nota de Performance</h2>
                                    <p>
                                        <span className="text-destaque">65</span>/100
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-outline-success btn-sm float-right">
                                        ver raio-x
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="card">
                                <div class="card-header border-0">
                                    <FontAwesomeIcon icon={faQuestion} />
                                </div>
                                <div class="card-body">
                                    <h2>Combinações Possíveis</h2>
                                    <p>788</p>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-outline-success btn-sm float-right">
                                        ver palavras
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="card">
                                <div class="card-header border-0">
                                    <FontAwesomeIcon icon={faQuestion} />
                                </div>
                                <div class="card-body">
                                    <h2>Saldo Atual</h2>
                                    <p>R$ 2.500,00</p>
                                </div>
                                <div class="card-footer border-0"></div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <div class="card">
                                <div class="card-header border-0">
                                    <FontAwesomeIcon icon={faQuestion} />
                                </div>

                                <div class="card-body">
                                    <h2>Nota de Performance</h2>
                                    <p>Site no Ar!</p>
                                </div>
                                <div class="card-footer border-0"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h2 class="m-0 title-section">Campanhas</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header border-0"></div>
                                <div className="card-body">
                                    <table className="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b>nome</b>
                                                </th>
                                                <th>
                                                    <b>impressões</b>
                                                </th>
                                                <th>
                                                    <b>cliques</b>
                                                </th>
                                                <th>
                                                    <b>cpc</b>
                                                </th>
                                                <th>
                                                    <b>conversões</b>
                                                </th>
                                                <th>
                                                    <b>investimento</b>
                                                </th>
                                                <th>
                                                    <b>alerta</b>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {campanhas.map((element) => {
                                            return (
                                                <tr>
                                                    <td>{element.nome}</td>
                                                    <td>{element.impressoes}</td>
                                                    <td>{element.cliques}</td>
                                                    <td>{element.cpc}</td>
                                                    <td>{element.conversoes}</td>
                                                    <td>{element.investimento}</td>
                                                    <td>{element.alerta}</td>
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

export default Home;