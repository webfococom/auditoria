import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faEdit, faPause, faRobot} from '@fortawesome/free-solid-svg-icons';
import Chart from "chart.js";

let comparativo = {
    nome: 'campanha A',
    impressoes: {
        valor: '29.856',
        porcentagem: '14,87',
        mesAnterior: '21.356'
    },
    cliques: {
        valor: '1.897',
        porcentagem: '26,87',
        mesAnterior: '1.584'
    },
    cpc: {
        valor: 'R$0,98',
        porcentagem: '17,28',
        mesAnterior: 'R$1,12'
    },
    conversoes: {
        valor: '14.659',
        porcentagem: '32,85',
        mesAnterior: '10.258'
    },
    investimento: {
        valor: 'R$120,00',
        porcentagem: '32,85',
        mesAnterior: 'R$100,00'
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

let createChart = () => {
    let ctx = document.getElementById('chart-publico-atingido');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{
                label: false,
                data: [48.2, 79.1, 48.5, 63.7, 74.4, 58, 40.1],
                backgroundColor: [
                    '#5aa5e0',
                    '#5aa5e0',
                    '#5aa5e0',
                    '#5aa5e0',
                    '#5aa5e0',
                    '#5aa5e0',
                    '#5aa5e0',
                ],
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    // barPercentage: 2,
                    // barThickness: 6,
                    // maxBarThickness: 8,
                    // minBarLength: 80,
                    // gridLines: {
                    //     offsetGridLines: true
                    // }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
            /*scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }*/
        },
    });
};

export default class PainelDaCampanha extends React.Component {

    componentDidMount() {
        let performace = 67;
        createChart(performace);
    }

    render() {
        return (
            <div className="content-header content-ads view-resultados">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-auditoria">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Painel da Campanha</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <h2 className="title-section">Painel da campanha</h2>
                            <Link to="/" className="nav-link">
                                <FontAwesomeIcon icon={faRobot} /> Piloto automático
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="controll-budget">
                                <div className="content-budget">
                                    <span>Budget Diário</span>
                                    <div></div>
                                    <span>R$ 50,00</span>
                                </div>
                                <div className="content-actions">
                                    <ul>
                                        <li>
                                            <Link to="/" className="nav-link btn btn-sm">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="nav-link btn btn-sm">
                                                <FontAwesomeIcon icon={faPause} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="nav-link btn btn-sm">
                                                <FontAwesomeIcon icon={faRobot} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">

                                <div className="card-body content-comparativo-resultados">
                                    <div className="content-comparativo campanha">
                                        <p className="comparativo-title">Nome</p>
                                        <p>{comparativo.nome}</p>
                                    </div>
                                    <div className="content-comparativo impressoes">
                                        <p className="comparativo-title">Impressões</p>
                                        <p className="info-comparativo">
                                            <span className="text-blue">{comparativo.impressoes.valor}</span>
                                            <span className="text-green">{comparativo.impressoes.porcentagem}%</span>
                                        </p>
                                        <p>{comparativo.impressoes.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo cliques">
                                        <p className="comparativo-title">Cliques</p>
                                        <p className="info-comparativo">
                                            <span className="text-blue">{comparativo.cliques.valor}</span>
                                            <span className="text-green">{comparativo.cliques.porcentagem}%</span>
                                        </p>
                                        <p>{comparativo.cliques.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo cpc">
                                        <p className="comparativo-title">CPC</p>
                                        <p className="info-comparativo">
                                            <span className="text-blue">{comparativo.cpc.valor}</span>
                                            <span className="text-green">{comparativo.cpc.porcentagem}%</span>
                                        </p>
                                        <p>{comparativo.cpc.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo conversoes">
                                        <p className="comparativo-title">Conversões</p>
                                        <p className="info-comparativo">
                                            <span className="text-blue">{comparativo.conversoes.valor}</span>
                                            <span className="text-green">{comparativo.conversoes.porcentagem}%</span>
                                        </p>
                                        <p>{comparativo.conversoes.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo investimento">
                                        <p className="comparativo-title">Investimento</p>
                                        <p className="info-comparativo">
                                            <span className="text-blue">{comparativo.investimento.valor}</span>
                                            <span className="text-green">{comparativo.investimento.porcentagem}%</span>
                                        </p>
                                        <p>{comparativo.investimento.mesAnterior}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <canvas id="chart-publico-atingido"></canvas>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <p>Público Não atingido</p>
                                        <p>
                                            <span>40%</span>
                                            <span>21.239</span>
                                        </p>
                                        <p>Que tal aumentar o orçamento diário para alcançar mais pessoas?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <span>Conversões</span>
                                    <button className="btn btn-outline-success btn-sm">
                                        Ativar piloto automático
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-12"></div>
                                        <div className="col-lg-7 col-md-7 col-sm-12"></div>
                                    </div>
                                </div>
                                <div className="card-footer">

                                    <p>Sugerimos aumento de investimento</p>
                                    <p>Atual: R$30</p>
                                    <p>Sugestão: R$80</p>
                                    <button className="btn btn-success btn-sm">
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12">

                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">

                        </div>
                    </div>



                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <table className="table table-condensed tabela-campanhas">
                                    <thead>
                                        <tr></tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
