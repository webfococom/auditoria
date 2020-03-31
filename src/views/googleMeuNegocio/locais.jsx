import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selecionarLocal } from '../../redux/actions';

const locais = [
    {
        name: 'Barbearia em São Paulo',
        endereco: 'Avenida nações unidas, 3344 - Vila nova cidade universitária',
        status: {
            enable: true,
            color: 'green',
            text: 'Confirmado (1 atualização)',
            icon: <FontAwesomeIcon icon={faCheckCircle} color="green"/>,
        },
        link: {
            text: 'Consultar atualizações',
            route: '#',
        }
    },
    {
        name: 'Barbearia em São Paulo',
        endereco: 'Avenida nações unidas, 3344 - Vila nova cidade universitária',
        status: {
            enable: false,
            color: 'red',
            text: 'Cópia',
            icon: <FontAwesomeIcon icon={faExclamationCircle} color="red"/>,
        },
        link: {
            text: 'Saiba mais',
            route: '#',
        }
    },
    {
        name: 'Barbearia em São Caetano',
        endereco: 'Alameda São Caetano, 1021 - São Caetano do Sul - SP',
        status: {
            enable: true,
            color: 'green',
            text: 'Confirmado',
            icon: <FontAwesomeIcon icon={faCheckCircle} color="green"/>,
        },
        link: {
            text: '',
            route: '#',
        }
    },
    {
        name: 'Tapeçaria SP Delivery: Reforma de estofados, sofá e cadeiras',
        endereco: 'Rua Belas-Artes, 52 - Ipiranga - SP, 04276-010',
        status: {
            enable: false,
            color: 'red',
            text: 'Suspensos',
            icon: <FontAwesomeIcon icon={faExclamationCircle} color="red"/>,
        },
        link: {
            text: 'Saiba mais',
            route: '#',
        }
    },
];

class GMBLocais extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        // if (this.props.localSelected === null) {
        //     this.props.history.push('/google-meu-negocio/locais');
        // }
    }

    goToIndex = (status) => {
        if (status) {
            this.props.selecionarLocal(true);

            setTimeout(() => {
                this.props.history.push('/google-meu-negocio/');
            }, 500);
        }
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
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/">Google Meu Negócio</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <h2 className="title-section">Gerenciar locais</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <button className="btn btn-primary float-right">Criar grupo de locais</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Locais não agrupados
                                </button>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button">opção 1</button>
                                    <button class="dropdown-item" type="button">opção 2</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div>
                                <span className="float-left">4 Locais</span>
                                <span className="float-right">50% confirmados</span>
                            </div>
                            <br/>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-lg-12 cold-md-12 col-sm-12">
                            <div class="card">
                                <div className="card-header border-0">
                                    <div className="container-title-table">
                                        <p>Locais</p>
                                        
                                        <div className="container-botoes-locais">
                                            <div class="dropdown" style={{marginRight: '10px'}}>
                                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Todos os locais (4)
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="dropdownMenu2">
                                                    <button class="dropdown-item" type="button">Barbearia em São Paulo</button>
                                                    <button class="dropdown-item" type="button">Barbearia em São Paulo (Cópia)</button>
                                                    <button class="dropdown-item" type="button">Barbearia em São Caetano</button>
                                                    <button class="dropdown-item" type="button">Tapeçaria SP Delivery</button>
                                                </div>
                                            </div>

                                            <div class="dropdown">
                                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Adicionar Local
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="dropdownMenu2">
                                                    <button class="dropdown-item" type="button">Adicionar um único local</button>
                                                    <button class="dropdown-item" type="button">Importar locais</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <table class="table table-condensed tabela-campanhas">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="form-check">
                                                        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                                                    </div>
                                                </th>
                                                <th><b>Nome</b></th>
                                                <th><b>Status</b></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {locais.map((element, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>
                                                        <div class="form-check">
                                                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" onClick={() => this.goToIndex(element.status.enable)}>
                                                            <b>{element.name}</b><br/>
                                                            {element.endereco}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {element.status.icon} {element.status.text}
                                                    </td>
                                                    <td>
                                                        <a href={element.link.route}>
                                                            {element.link.text}
                                                        </a>
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

const mapStateToProps = store => ({
    localSelected: store.localSelectedState.selected
});

const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        selecionarLocal 
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GMBLocais);