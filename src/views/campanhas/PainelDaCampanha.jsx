import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faTimesCircle,
    faCaretUp,
    faCaretDown,
    faPencilAlt,
    faPause,
    faRobot
} from '@fortawesome/free-solid-svg-icons';
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

let getPorcentagem = (porcentagem, status, color) => {
    return (
        <span className={`text-${color}`}>
            {porcentagem}% <FontAwesomeIcon icon={(status ==="up") ? faCaretUp:faCaretDown} />
        </span>
    );
};

let getExtensoesDeAnuncios = (extensao, configurada) => {
    return (
        <div className={classNames("box-extensao", { configurado: configurada, 'nao-configurado': !configurada })}>
            <span className="text-extensao">{extensao}</span>
            <div className="status-extensao">
                <FontAwesomeIcon
                    icon={(configurada === true) ? faCheckCircle : faTimesCircle}
                    className="status-raio-x"
                />
                <span>{(configurada === true) ? '' : 'Não'} Configurado</span>
            </div>
        </div>
    );
};

let createChart = () => {
    new Chart(document.getElementById('chart-publico-atingido'), {
        type: 'bar',
        data: {
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{
                label: false,
                data: [48.2, 79.1, 48.5, 63.7, 74.4, 58, 40.1],
                backgroundColor: '#5aa5e0',
            }]
        },
        options: {
            // tooltips: {
            //     enabled: true,
            // },
            legend: false,
            scales: {
                labelString: 'alex',
                xAxes: [{

                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                    }
                }]
            }
        }
    });
};

let createChartConversoesDevice = () => {
    new Chart(document.getElementById('chart-conversoes-device'), {
        type: 'pie',
        data: {
            // labels: ["Africa", "Asia"],
            labels: false,
            datasets: [{
                label: false,
                backgroundColor: ["#5aa5e0", "#1cce61"],
                data: [75, 25]
            }]
        },
        options: {
            display: {
                position: 'top',
            },
            title: {
                display: true,
            }
        }
    });
};

let createChartConversoesTime = () => {
    new Chart(document.getElementById('chart-conversoes-time'), {
        type: 'bar',
        data: {
            labels: ["1900", "1950", "1999", "2050"],
            datasets: [{
                label: "Europe",
                type: "line",
                borderColor: "#8e5ea2",
                data: [408,547,675,734],
                fill: false
            }, {
                label: "Africa",
                type: "line",
                borderColor: "#3e95cd",
                data: [133,221,783,2478],
                fill: false
            }, {
                label: "Europe",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408,547,675,734],
            }, {
                label: "Africa",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133,221,783,2478]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Population growth (millions): Europe & Africa'
            },
            legend: { display: false }
        }
    });
};

export default class PainelDaCampanha extends React.Component {
    componentDidMount() {
        createChart(67);
        createChartConversoesDevice();
        createChartConversoesTime();
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

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="card-header border-0">
                                            <div className="flex header-publico-atingido">
                                                <p>
                                                    Público Atingido
                                                    <span></span>
                                                    Impressões Realistas
                                                </p>
                                                <button className="btn btn-outline-success btn-sm">
                                                    <FontAwesomeIcon icon={faRobot} /> Ativar o piloto automático
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <canvas id="chart-publico-atingido"></canvas>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="content-publico-nao-atingido">
                                            <div className="card-header border-0">
                                                <p className="header-publico-nao-atingido">Público Não Atingido</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="info">
                                                    <span>40%</span>
                                                    <span></span>
                                                    <span>21.239</span>
                                                </p>

                                                <p className="text">
                                                    Que tal aumentar o orçamento diário para alcançar mais pessoas?
                                                </p>

                                                <div>

                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="footer-publico-nao-atingido">
                                                    <p className="info">
                                                        <span>+17%</span>
                                                        <span></span>
                                                        <span>9.809</span>
                                                    </p>
                                                    <button className="btn btn-success btn-sm">
                                                        APLICAR
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card content-conversoes">
                                <div className="card-header border-0">
                                    <span className="title-card">Conversões</span>
                                    <button className="btn btn-outline-success btn-sm">
                                        <FontAwesomeIcon icon={faRobot} /> Ativar piloto automático
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <canvas id="chart-conversoes-device" />
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                            <canvas id="chart-conversoes-time" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="flex">
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
                    </section>

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card content-anuncios">
                                <div className="card-header border-0">
                                    <span className="title-card">Anúncios</span>
                                    <button className="btn btn-outline-success btn-sm">
                                        <FontAwesomeIcon icon={faRobot} /> Ativar piloto automático
                                    </button>
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <p>01 / 01</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="content-anuncio">
                                                <div className="header-anuncio">
                                                    <p className="title-anuncio">
                                                        Google Ads | Aumente sua visibilidade‎
                                                    </p>
                                                    <p className="url-anuncio">
                                                        <span>Anúncio</span> ads.google.com/
                                                    </p>
                                                </div>
                                                <div className="body-anuncio">
                                                    <p>
                                                        Aumente muito suas chances de ser encontrado por novos clientes com anúncios do Google.
                                                        Ajuda de especialistas. Impulsione vendas on-line. Anuncia Localmente.
                                                        Alcance muitas pessoas. Sem investimento mínimo.
                                                        Apareça Online. Relatórios customizados.
                                                    </p>
                                                </div>

                                                <div className="extensoes-anuncio">
                                                    <div className="info-extensao">
                                                        <p className="title-extensao">
                                                            Contas de Administrador
                                                        </p>
                                                        <p className="text-extensao">
                                                            Gerencie todas suas contas em um único painel de controle.
                                                        </p>
                                                    </div>
                                                    <div className="info-extensao">
                                                        <p className="title-extensao">
                                                            Planejador Palavras Chave
                                                        </p>
                                                        <p className="text-extensao">
                                                            Encontre as palavras chave mais relevantes para seu negócio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="info-anuncios">
                                                <div className="info">
                                                    <p className="title">Impressões</p>
                                                    <p className="value">28.856</p>
                                                    <p className="percent">
                                                        14,87% <FontAwesomeIcon icon={faCaretUp} />
                                                    </p>
                                                </div>
                                                <div className="info">
                                                    <p className="title">CPC</p>
                                                    <p className="value">R$0.98</p>
                                                    <p className="percent">
                                                        17,28% <FontAwesomeIcon icon={faCaretDown} />
                                                    </p>
                                                </div>
                                                <div className="info">
                                                    <p className="title">Conversões</p>
                                                    <p className="value">14.659</p>
                                                    <p className="percent">
                                                        32,85% <FontAwesomeIcon icon={faCaretUp} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="footer-info">
                                                <div className="">
                                                    <p>
                                                        Sugerimos no mínimo <br/>
                                                        <span className="blue">
                                                            3 anúncios
                                                        </span>
                                                    </p>
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
                    </section>

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card content-extensoes-de-anuncios">
                                <div className="card-header border-0">
                                    <p className="title-card">Extensões de Anúncios</p>
                                </div>
                                <div className="card-body">
                                    <div className="content-anuncios">

                                        {getExtensoesDeAnuncios("Chamada", true)}

                                        {getExtensoesDeAnuncios("Mensagem", false)}

                                        {getExtensoesDeAnuncios("Preço", true)}

                                        {getExtensoesDeAnuncios("Promoção", true)}

                                        {getExtensoesDeAnuncios("Snippet", true)}

                                        {getExtensoesDeAnuncios("Sitelink", false)}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success btn-sm float-right">
                                        Configurar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card content-sugestoes-de-palavras">
                                <div className="card-header border-0">
                                    <p className="title-card">Sugestões Automáticas de palavras</p>
                                </div>
                                <div className="card-body">
                                    <div className="content-sugestoes-adicionar">
                                        <p>Sugestões para adicionar</p>
                                        <table className="table table-condensed">
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
                                                        <button className="btn btn-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
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
                                                        <button className="btn btn-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
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
                                                        <button className="btn btn-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
                                                        <button className="btn btn-outline-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="content-sugestoes-negativas">
                                        <p>Sugestões para Negativar</p>
                                        <table className="table table-condensed">
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
                                                        <button className="btn btn-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
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
                                                        <button className="btn btn-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
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
                                                        <button className="btn btn-danger btn-sm btn-negativar">
                                                            Negativar
                                                        </button>
                                                        <button className="btn btn-outline-success btn-sm btn-adicionar">
                                                            Adicionar
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
