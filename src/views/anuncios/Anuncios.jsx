import React from "react";
import { Route, Switch } from "react-router-dom";

export default class Anuncios extends React.Component {
    render() {
        return (
            <div class="content-header">
                <div class="container-fluid">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Visão Geral</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Painel da Campanha</li>
                            </ol>
                        </nav>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h2 class="m-0 text-dark">Criação de campanhas em 6 passos</h2>
                            <div>
                                <div className="steps"></div>
                                <hr/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h2>Dados iniciais</h2>
                            <p>Preencha todos os dados passo-a-passo para construirmos juntos uma campanha de sucesso.</p>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <form>
                                <div class="row">

                                    <div class="col-lg-12 col-md-12 col-sm-12">

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nome e sobrenome:</label>
                                            <input type="email"
                                                   class="form-control"
                                                   id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Nome e sobrenome"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nome e sobrenome:</label>
                                            <input type="email"
                                                   class="form-control"
                                                   id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Nome e sobrenome"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}