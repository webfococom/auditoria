import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBullhorn, faHeartbeat, faChartLine } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon icon={faBars} />
                    <span className="name">
                        Menu
                    </span>
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
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false">
                            <li className="nav-item">
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
                            <li className="nav-item">
                                <Link to="/bot" className="nav-link">
                                    <FontAwesomeIcon icon={faHeartbeat} /> <p>Chatbot</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;