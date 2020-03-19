import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

let random = (Math.floor(((Math.random() * (10 - 1)) + 1)) % 2);

let visaoGeral = {
    performace: Math.floor(Math.random() * (100 - 1)) + 1,
    combinacoes: Math.floor(Math.random() * (5000 - 1)) + 1,
    saldo: Math.floor(Math.random() * (1000 - 1)) + 1,
    siteOnline: (random === 1) ? true : false
};

let campanhas = [
    {
        nome: 'Campanha A',
        route: 'campanha-a',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'red',
    },
    {
        nome: 'Campanha B',
        route: 'campanha-b',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    },
    {
        nome: 'Campanha C',
        route: 'campanha-c',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    },
    {
        nome: 'Campanha D',
        route: 'campanha-d',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'red',
    },
    {
        nome: 'Campanha E',
        route: 'campanha-e',
        impressoes: 29856,
        cliques: 1897,
        cpc: 0.98,
        conversoes: 14659,
        investimento: 60.00,
        alerta: 'green',
    }
];

var iconSiteOnline = (isOnline) => {
    if (isOnline === true) {
        return (
            <FontAwesomeIcon
                icon={faCheckCircle}
                className="ico-green"
            />
        );
    }

    return (<FontAwesomeIcon icon={faTimesCircle} className="ico-red" />);
};

var alertCampanha = (status) => {
    if (status === 'red') {
        return (
            <FontAwesomeIcon
                icon={faCircle}
                className="campanha-status red"
            />
        );
    }

    return (<FontAwesomeIcon icon={faCircle} className="campanha-status green" />);
};

class Home extends React.Component {
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
                                    <div className="site-is-online">
                                        {iconSiteOnline(visaoGeral.siteOnline)}
                                        <p>
                                            {(visaoGeral.siteOnline === true) ? 'Site no Ar!' : 'Site fora do Ar!'}
                                        </p>
                                    </div>
                                </div>
                                <div className="card-footer border-0"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Campanhas</h2>
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
                                                <th></th>
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
                                                    <td>
                                                        {alertCampanha(element.alerta)}
                                                    </td>
                                                    <td>
                                                        <Link to={`/painel/${element.route}`} className={classNames('btn btn-sm', (element.alerta === 'green') ? 'btn-outline-success' : "btn-outline-danger")}>
                                                            ir para o painel
                                                        </Link>
                                                        {/*<button className={classNames('btn btn-sm', (element.alerta === 'green') ? 'btn-outline-success' : "btn-outline-danger")}>
                                                            ir para o painel
                                                        </button>*/}
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

export default Home;