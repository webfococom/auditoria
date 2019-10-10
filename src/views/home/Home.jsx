import React from "react";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

let random = (Math.floor(((Math.random() * (10 - 1)) + 1)) % 2);
console.log(random);


let visaoGeral = {
    performace: Math.floor(Math.random() * (100 - 1)) + 1,
    combinacoes: Math.floor(Math.random() * (5000 - 1)) + 1,
    saldo: Math.floor(Math.random() * (1000 - 1)) + 1,
    siteOnline: (random == 1) ? true : false
};

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

var iconSiteOnline = (isOnline) => {
    if (isOnline) {
        return (
            <FontAwesomeIcon
                icon={faCheckCircle}
            />
        );
    }

    return (<FontAwesomeIcon icon={faCheckCircle} />);
};

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

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Nota de Performance</p>
                                    <p>
                                        <span className="destaque">{visaoGeral.performace}</span>/100
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm float-right">
                                        ver raio-x
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Combinações Possíveis</p>
                                    <p className="destaque">{visaoGeral.combinacoes}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm float-right">
                                        ver palavras
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Saldo Atual</p>
                                    <p className="destaque">R$ {visaoGeral.saldo}</p>
                                </div>
                                <div className="card-footer border-0"></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>

                                <div className="card-body">
                                    {iconSiteOnline(visaoGeral.saldo)}
                                    <p>
                                        {(visaoGeral.saldo == true )? 'Site no Ar!' : 'Site fora do Ar!'}
                                    </p>
                                </div>
                                <div className="card-footer border-0"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="m-0 title-section">Campanhas</h2>
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
                                        {campanhas.map((element, key) => {
                                            return (
                                                <tr key={key}>
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