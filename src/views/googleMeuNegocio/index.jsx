import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

class GoogleMeuNegocio extends React.Component {
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
                            <h2 className="title-section">Google Meu Negocio</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                        <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
                            {/* 
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <p>Desempenho</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            <p>Visualizações</p>
                                            <p>27</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            <p>Pesquisa</p>
                                            <p>8</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            <p>Atividade</p>
                                            <p>10</p>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <ul>
                                                <li>Visualizações de pesquisa 6(-89%)</li>
                                                <li>Visualizações no Maps 21(-43%)</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div>
                                                <p>
                                                    Pesquisa direta
                                                    <span>3(-67%)</span>
                                                </p>
                                                <p>Clientes que encontram sua ficha ao pesquisar o nome ou o endereço da sua empresa</p>
                                            </div>

                                            <div>
                                                <p>
                                                    Descoberta
                                                    <span>5(-91%)</span>
                                                </p>
                                                <p>Clientes que encontram sua ficha ao pesquisar uma categoria, um produto ou um serviço</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <ul>
                                                <li>Visitas do site<span>0</span></li>
                                                <li>Chamadas<span>0</span></li>
                                                <li>Visualizações de fotos<span>10(+67%)</span></li>
                                                <li>Solicitações de rotas<span>0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p>
                                        Desempenho nos últimos 28 dias
                                    </p>
                                </div>
                            </div>
                             */}
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0">
                                    <p>Receba mais avaliações</p>
                                </div>
                                <div className="card-body">
                                    <p>Compartilhe o perfil da sua empresa e receba novas avaliações dos clientes</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success btn-sm float-right">
                                        Compart. form. de avaliação
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card card-home">
                                <div className="card-header border-0"></div>
                                <div className="card-body"></div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default GoogleMeuNegocio;