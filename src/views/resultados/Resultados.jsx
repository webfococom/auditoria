import React from "react";
import { Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

let resultados = {
    econometro: 937.23,
    conversoes: 46,
    palavrasCombinadas: 5234
};

let comparativo = {
    nome: 'campanha A',
    impressoes: {
        valor: 29856,
        porcentagem: 14.87,
        mesAnterior: 21356
    },
    cliques: {
        valor: 1897,
        porcentagem: 26.87,
        mesAnterior: 1584
    },
    cpc: {
        valor: 0.98,
        porcentagem: 17.28,
        mesAnterior: 1.12
    },
    conversoes: {
        valor: 14659,
        porcentagem: 32.85,
        mesAnterior: 10258
    },
    investimento: {
        valor: 120.0,
        porcentagem: 32.85,
        mesAnterior: 100.0
    }
};

let palavrasMovimentadas = [
    {
        nome: 'Palavra A',
        grupo: 'X',
        campanha: 'Campanha A',
        acao: 'Adição',
        data: '01/05/2019',
    },
    {
        nome: 'Palavra B',
        grupo: 'Y',
        campanha: 'Campanha B',
        acao: 'Negativação',
        data: '15/02/2019',
    },
    {
        nome: 'Palavra C',
        grupo: 'Z',
        campanha: 'Campanha C',
        acao: 'Adição',
        data: '27/02/2019',
    },
];

class Resultados extends React.Component {
    render() {
        return (
            <div className="content-header content-ads view-resultados">
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
                            <h2 className="title-section">Resultados</h2>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <b>Econômetro</b>
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Você já economizou conosco</p>
                                    <p>R$ {resultados.econometro}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm">
                                        ver detalhes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <b>Resultados com o Robô</b>
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>Você aumentou suas conversões em</p>
                                    <p>{resultados.conversoes}%</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm">
                                        ver detalhes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <b>Palavras Combinadas</b>
                                    <FontAwesomeIcon
                                        icon={faQuestion}
                                        className="fa-pull-right"
                                    />
                                </div>
                                <div className="card-body">
                                    <p>{resultados.palavrasCombinadas}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm">
                                        ver detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <span>Comparativo</span>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faQuestion}
                                            className="fa-pull-right"
                                        />
                                        <button className="btn btn-sm btn-outline-success float-right">
                                            ver calendário
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body content-comparativo-resultados">
                                    <div className="content-comparativo campanha">
                                        <p>Nome</p>
                                        <p>{comparativo.nome}</p>
                                    </div>
                                    <div className="content-comparativo impressoes">
                                        <p>Impressões</p>
                                        <p>
                                            <span>{comparativo.impressoes.valor}</span>
                                            <span>{comparativo.impressoes.porcentagem}</span>
                                        </p>
                                        <p>{comparativo.impressoes.porcentagem}</p>
                                    </div>
                                    <div className="content-comparativo cliques">
                                        <p>Cliques</p>
                                        <p>
                                            <span>{comparativo.cliques.valor}</span>
                                            <span>{comparativo.cliques.porcentagem}</span>
                                        </p>
                                        <p>{comparativo.cliques.porcentagem}</p>
                                    </div>
                                    <div className="content-comparativo cpc">
                                        <p>cpc</p>
                                        <p>
                                            <span>{comparativo.cpc.valor}</span>
                                            <span>{comparativo.cpc.porcentagem}</span>
                                        </p>
                                        <p>{comparativo.cpc.porcentagem}</p>
                                    </div>
                                    <div className="content-comparativo conversoes">
                                        <p>Conversões</p>
                                        <p>
                                            <span>{comparativo.conversoes.valor}</span>
                                            <span>{comparativo.conversoes.porcentagem}</span>
                                        </p>
                                        <p>{comparativo.conversoes.porcentagem}</p>
                                    </div>
                                    <div className="content-comparativo investimento">
                                        <p>Investimento</p>
                                        <p>
                                            <span>{comparativo.investimento.valor}</span>
                                            <span>{comparativo.investimento.porcentagem}</span>
                                        </p>
                                        <p>{comparativo.investimento.porcentagem}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <span>Palavras movimentadas</span>
                                    </div>
                                    <div>
                                        <p>10 Palavras adicionadas</p>
                                        <p>10 Palavras negativadas</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table className="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b>Nome</b>
                                                </th>
                                                <th>
                                                    <b>Grupo</b>
                                                </th>
                                                <th>
                                                    <b>Campanha</b>
                                                </th>
                                                <th>
                                                    <b>Ação</b>
                                                </th>
                                                <th>
                                                    <b>Data</b>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {palavrasMovimentadas.map((item) => {
                                            return (
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.grupo}</td>
                                                    <td>{item.campanha}</td>
                                                    <td>{item.acao}</td>
                                                    <td>{item.data}</td>
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

export default Resultados;