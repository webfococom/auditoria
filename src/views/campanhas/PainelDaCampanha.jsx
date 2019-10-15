import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCaretUp, faCaretDown, faPencilAlt, faPause, faRobot} from '@fortawesome/free-solid-svg-icons';
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

let getPorcentagem = (porcentagem, status, color) => {
    return (
        <span className={`text-${color}`}>
            {porcentagem}% <FontAwesomeIcon icon={(status ==="up") ? faCaretUp:faCaretDown} />
        </span>
    );
};

export default class PainelDaCampanha extends React.Component {
    componentDidMount() {
        let performace = 67;
        createChart(performace);
    }

    render() {
        return (
            <div className="content-header content-ads view-painel-da-campanha">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-auditoria">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Painel da Campanha
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="flex">
                                <h2 className="title-section">Painel da campanha</h2>
                                <button className="btn btn-xs btn-piloto-auto">
                                    <FontAwesomeIcon icon={faRobot} /> Piloto automático
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="controll-budget flex">
                                <div className="content-budget">
                                    <span className="text">Budget Diário</span>
                                    <div className="progress">
                                        <div className="progress-bar"
                                             role="progressbar"
                                             style={{width: "25%"}}
                                             aria-valuenow="25"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                        />
                                    </div>
                                    <span className="value">R$ 50,00</span>
                                </div>
                                <div className="content-actions">
                                    <button className="btn btn-sm">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </button>
                                    <button className="btn btn-sm">
                                        <FontAwesomeIcon icon={faPause} />
                                    </button>
                                    <button className="btn btn-sm">
                                        <FontAwesomeIcon icon={faRobot} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-body content-comparativo-painel">
                                    <div className="content-comparativo campanha">
                                        <p className="comparativo-title">Nome</p>
                                        <p>{comparativo.nome}</p>
                                    </div>
                                    <div className="content-comparativo impressoes">
                                        <p className="comparativo-title">Impressões</p>
                                        <p className="info-comparativo">
                                            {comparativo.impressoes.valor}
                                            {getPorcentagem(comparativo.impressoes.porcentagem, 'up', 'green')}
                                        </p>
                                        <p>{comparativo.impressoes.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo cliques">
                                        <p className="comparativo-title">Cliques</p>
                                        <p className="info-comparativo">
                                            {comparativo.cliques.valor}
                                            {getPorcentagem(comparativo.cliques.porcentagem, 'up', 'green')}
                                        </p>
                                        <p>{comparativo.cliques.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo cpc">
                                        <p className="comparativo-title">CPC</p>
                                        <p className="info-comparativo">
                                            {comparativo.cpc.valor}
                                            {getPorcentagem(comparativo.cliques.porcentagem, 'down', 'green')}
                                        </p>
                                        <p>{comparativo.cpc.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo conversoes">
                                        <p className="comparativo-title">Conversões</p>
                                        <p className="info-comparativo">
                                            {comparativo.conversoes.valor}
                                            {getPorcentagem(comparativo.conversoes.porcentagem, 'up', 'green')}
                                        </p>
                                        <p>{comparativo.conversoes.mesAnterior}</p>
                                    </div>
                                    <div className="content-comparativo investimento">
                                        <p className="comparativo-title">Investimento</p>
                                        <p className="info-comparativo">
                                            {comparativo.investimento.valor}
                                            {getPorcentagem(comparativo.investimento.porcentagem, 'up', 'green')}
                                        </p>
                                        <p>{comparativo.investimento.mesAnterior}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <span>Anúncios</span>
                                    <button className="btn btn-outline-success btn-sm">
                                        Ativar piloto automático
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">

                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="content">
                                                <div>
                                                    <p>Impressões</p>
                                                    <p>28.856</p>
                                                    <p>14,87%</p>
                                                </div>
                                                <div>
                                                    <p>CPC</p>
                                                    <p>R$0.98</p>
                                                    <p>17,28%</p>
                                                </div>
                                                <div>
                                                    <p>Conversões</p>
                                                    <p>14.659</p>
                                                    <p>32,85%</p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div>
                                                    <p>Sugerimos no mínimo</p>
                                                    <p>3 anúncios</p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-success">Criar agora</button>
                                                    <button className="btn btn-success">Ver todos</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">{/*2.095.713/19-9*/}
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <p>Extensões de anúncios</p>
                                </div>
                                <div className="card-body">
                                    <div className="content-anuncios">
                                        <div>
                                            <p>Chamada</p>
                                        </div>
                                        <div>
                                            <p>Mensagem</p>
                                        </div>
                                        <div>
                                            <p>Preço</p>
                                        </div>

                                        <div>
                                            <p>Promoção</p>
                                        </div>
                                        <div>
                                            <p>Snippet</p>
                                        </div>
                                        <div>
                                            <p>Sitelink</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success btn-sm">
                                        Configurar
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <p>Sugestões Automáticas de palavras</p>

                                    <div>
                                        <p>Sugestões para adicionar</p>
                                        <table className="table table-condensed tabela-campanhas">
                                            <thead>
                                                <tr>
                                                    <td>Nome</td>
                                                    <td>Grupo</td>
                                                    <td>Impressões</td>
                                                    <td>Clique</td>
                                                    <td>Conversões</td>
                                                    <td>Custo</td>
                                                    <td>Ação</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Palavra A</td>
                                                    <td>X</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-success btn-sm">Adicionar</button>
                                                        <button className="btn btn-outline-danger btn-sm">Negativar</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Palavra B</td>
                                                    <td>Y</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-success btn-sm">Adicionar</button>
                                                        <button className="btn btn-outline-danger btn-sm">Negativar</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Palavra C</td>
                                                    <td>Z</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-success btn-sm">Adicionar</button>
                                                        <button className="btn btn-outline-danger btn-sm">Negativar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <p>Sugestões para negativar</p>
                                        <table className="table table-condensed tabela-campanhas">
                                            <thead>
                                                <tr>
                                                    <td>Nome</td>
                                                    <td>Grupo</td>
                                                    <td>Impressões</td>
                                                    <td>Clique</td>
                                                    <td>Conversões</td>
                                                    <td>Custo</td>
                                                    <td>Ação</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Palavra A</td>
                                                    <td>X</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm">Negativar</button>
                                                        <button className="btn btn-outline-success btn-sm">Adicionar</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Palavra B</td>
                                                    <td>Y</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm">Negativar</button>
                                                        <button className="btn btn-outline-success btn-sm">Adicionar</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Palavra C</td>
                                                    <td>Z</td>
                                                    <td>1.897</td>
                                                    <td>R$0.98</td>
                                                    <td>14.659</td>
                                                    <td>14.659</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm">Negativar</button>
                                                        <button className="btn btn-outline-success btn-sm">Adicionar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
