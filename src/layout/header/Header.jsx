import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-ads">
                <div class="dropdown drop-cielo">
                    <button class="btn btn-primary btn-primary-cielo dropdown-toggle" type="button" id="btn-empresas-cielo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cielo Ads
                    </button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Google</a>
                        <a class="dropdown-item" href="#">Webfoco</a>
                    </div>
                </div>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <FontAwesomeIcon icon={faBell} color="#fff" />
                            <span className="badge badge-warning navbar-badge">2</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">2 Notificações</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 1 novo local adicionado
                                <span className="float-right text-muted text-sm">3 min</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 2 novos sites
                                <span className="float-right text-muted text-sm">2 dias</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">Ver todas notificações</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;