import React from "react";
import { Route, Switch } from "react-router-dom";

let infoRaioX = [
    {
        name: 'Site responsivo',
        colorLabel: 'red',
        info: {

        }
    },
    {
        name: 'Tempo de carregamento',
        colorLabel: 'red',
        info: {

        }
    },
    {
        name: 'Google Analytics vinculado',
        colorLabel: 'red',
        info: {

        }
    },
    {
        name: 'Conversões configuradas',
        colorLabel: 'red',
        info: {

        }
    },
    {
        name: 'Smart Bind ativo por campanha',
        colorLabel: 'green',
        info: {

        }
    },
    {
        name: 'Extensões de anúncios',
        colorLabel: 'red',
        info: {

        }
    },
];

class RaioX extends React.Component {
    render() {
        return (
            <div className="content-header content-ads">
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
                                return (
                                    <div className="card" style={{padding: '10px'}}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <div>
                                                    <span className=""></span>
                                                    <span>{element.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">

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