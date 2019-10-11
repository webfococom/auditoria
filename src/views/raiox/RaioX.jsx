import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

let infoRaioX = [
    {
        name: 'Site responsivo',
        colorLabel: 'red',
        blocks: [
            {
                text: 'Não',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
    {
        name: 'Tempo de carregamento',
        colorLabel: 'red',
        blocks: [
            {
                text: '45 segundos',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
    {
        name: 'Google Analytics vinculado',
        colorLabel: 'red',
        blocks: [
            {
                text: 'Não',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
    {
        name: 'Conversões configuradas',
        colorLabel: 'red',
        blocks: [
            {
                text: 'Não',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
    {
        name: 'Smart Bind ativo por campanha',
        colorLabel: 'green',
        blocks: [
            {
                text: 'Ativo',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
    {
        name: 'Extensões de anúncios',
        colorLabel: 'red',
        blocks: [
            {
                text: '3 extensões inativas',
                button: null
            },
            {
                text: 'Mais informações',
                button: {
                    link: '#',
                    text: 'Solucionar',
                    ico: '',
                    class: 'btn btn-success btn-sm'
                }
            }
        ]
    },
];

let getStatus = (status) => {
    if (status === 'red') {
        return (
            <FontAwesomeIcon
                icon={faCircle}
                className="status-raio-x red"
            />
        );
    }

    return (<FontAwesomeIcon icon={faCircle} className="status-raio-x green" />);
};

class RaioX extends React.Component {
    render() {
        return (
            <div className="content-header content-ads view-raio-x">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {/*<li className="breadcrumb-item"><a href="#">Raio X</a></li>*/}
                                    {/*<li class="breadcrumb-item"><a href="#">Visão Geral</a></li>*/}
                                    {/*<li class="breadcrumb-item active" aria-current="page">Painel da Campanha</li>*/}
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <h2 className="m-0 title-section">Raio-X</h2>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12">
                            <button type="button" className="btn btn-info btn-block float-right">
                                <i class="fas fa-plus"></i> Reavaliar
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">

                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            {infoRaioX.map(element => {
                                console.log(element);
                                return (
                                    <div className="card" style={{padding: '10px'}}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <div className="primeiro-bloco">
                                                    {getStatus(element.colorLabel)}
                                                    <span>{element.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <div className="content-block">
                                                {element.blocks.map(block => {
                                                    return (
                                                        <div className="block">
                                                            <div>
                                                                <span>{block.text}</span>
                                                            </div>
                                                            <div>
                                                            {
                                                                (block.button !== null) ?
                                                                    <Link
                                                                        to={block.button.link}
                                                                        className={block.button.class}
                                                                    >
                                                                        {block.button.text}
                                                                    </Link> :
                                                                    null
                                                            }
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RaioX;