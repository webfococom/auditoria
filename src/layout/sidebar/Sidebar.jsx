import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, 
    faHome, 
    faBullhorn, 
    faHeartbeat, 
    faRobot,
    faChartLine ,
    faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

// map-marked-alt

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sideBarOpen: false
        };

        this.openCloseMenu = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            sideBarOpen: !state.sideBarOpen
        }));
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-collapse sidebar-ads">
                {/*sidebar-mini layout-fixed sidebar-collapse*/}
                {/*sidebar-mini layout-fixed sidebar-open*/}
                <Link className="brand-link toggle-menu" onClick={this.openCloseMenu}>
                    <Link to="/" style={{width: '100%'}}>
                        <img src={require('assets/images/logo-cielo.png')} style={{width: '100px', justifyItems:'center'}}/>
                    </Link>
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                    {/* <span className="name">
                        Ads-Hub
                    </span> */}
                </Link>

                {/*<a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png"
                         alt="AUDITORIA ADS"
                         className="brand-image img-circle elevation-3"
                         style={{"opacity": ".8"}} />
                    <span className="brand-text font-weight-light">AUDITORIA ADS</span>
                </a>*/}

                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview-menu"
                            role="menu"
                            data-accordion="false">
                                
                            {/* GOOGLE MEU NEGOCIO */}
                            <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>
                            Charts
                            <i class="right fas fa-angle-left"></i>
                            </p>
                            </a>
                            <ul class="nav nav-treeview">
                            <li class="nav-item">
                            <a href="pages/charts/chartjs.html" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>ChartJS</p>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="pages/charts/flot.html" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Flot</p>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="pages/charts/inline.html" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Inline</p>
                            </a>
                            </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                {/* <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} /> 
                                    <p>Google Meu Negócio</p>
                                </Link> */}
                                <p>Google Meu Negócio</p>
                                <ul className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview-menu"
                                    role="menu"
                                    data-accordion="false">
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio" className="nav-link">
                                            <p>Início</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/postagens" className="nav-link">
                                            <p>Postagens</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/informacoes" className="nav-link">
                                            <p>Informações</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/resultados" className="nav-link">
                                            <p>Resultados</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/avaliacoes" className="nav-link">
                                            <p>Avaliações</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/mensagens" className="nav-link">
                                            <p>Mensagens</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/fotos" className="nav-link">
                                            <p>Fotos</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/produtos" className="nav-link">
                                            <p>Produtos</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/servicos" className="nav-link">
                                            <p>Serviços</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-meu-negocio/configuracoes" className="nav-link">
                                            <p>Configurações</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* GOOGLE MEU NEGOCIO */}

                            {/* GOOGLE ADS */}
                            <li className="nav-item">
                                {/* <div>
                                    <FontAwesomeIcon icon={faHome} /> <p>Google Ads</p>
                                </div> */}
                                <p>Google Ads</p>
                                <ul className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview-menu"
                                    role="menu"
                                    data-accordion="false"
                                >
                                    <li className="nav-item">
                                        <Link to="/google-ads" className="nav-link">
                                            <p>Visão geral</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-ads/oportunidades" className="nav-link">
                                            <p>Oportunidades</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/google-ads/piloto-automatico" className="nav-link">
                                            <p>Piloto Automático</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* GOOGLE ADS */}

                            {/* LANDING PAGES */}
                            <li className="nav-item">
                                {/* <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} /> <p>Landing Pages</p>
                                </Link> */}
                                <p>Landing Pages</p>
                                <ul className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview-menu"
                                    role="menu"
                                    data-accordion="false"
                                >
                                    <li className="nav-item">
                                        <Link to="/landing-pages" className="nav-link">
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/landing-pages/nova-lp" className="nav-link">
                                            <p>Novas landing page</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* CHATBOT */}
                            <li className="nav-item">
                                <p><FontAwesomeIcon icon={faRobot} /> Chatbot</p>
                                
                                <ul className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview-menu"
                                    role="menu"
                                    data-accordion="false"
                                >
                                    <li className="nav-item">
                                        <Link to="/bot" className="nav-link">
                                            <p>Cadastro</p>
                                        </Link>
                                    </li>
                                </ul>

                            </li>
                            {/* LANDING PAGES */}


                            {/* <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} /> <p>Home</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/anuncios" className="nav-link">
                                    <FontAwesomeIcon icon={faBullhorn} /> <p>Anúncios</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/raio-x" className="nav-link">
                                    <FontAwesomeIcon icon={faHeartbeat} /> <p>Raio X</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/mixer" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} /> <p>Mixer</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/resultados" className="nav-link">
                                    <FontAwesomeIcon icon={faChartLine} /> <p>Resultados</p>
                                </Link>
                            </li>
                        </li> */}
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;