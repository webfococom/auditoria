import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faRobot, faBriefcase,faAd,faFileWord,faStore} from '@fortawesome/free-solid-svg-icons';


import "./menuStyle.scss";
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'


class MenuList extends React.Component {
    render() {

    	const blockElements = {
            content: 'tabs-content',
            panel: 'tabs-panel',
            label: 'tabs-title'
        }

        return (
            <Tabbordion blockElements={blockElements} mode="toggle" className="accordion" name="accordion" initialPanels={[{ checked: true, index: 0 }]}>
                <TabPanel>
                    <TabLabel>
                        <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                    </TabLabel>
                    <TabContent> 
                        <ul className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview-menu"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                 <Link to="/" className="nav-link">
                                    <p>Visão Geral</p>
                                </Link>
                            </li>
                        </ul>
                    </TabContent>
                </TabPanel>

                 {/* GOOGLE MEU NEGOCIO */}
                <TabPanel>
                    <TabLabel><FontAwesomeIcon icon={faBriefcase} /> Google Meu Negócio</TabLabel>
                    <TabContent>
                       
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
                                <Link to="/google-meu-negocio/locais" className="nav-link">
                                    <p>locais</p>
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
                                    <p>Meus Produtos</p>
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
                    </TabContent>
                </TabPanel>

                {/* GOOGLE ADS */}
                <TabPanel>
                    <TabLabel><FontAwesomeIcon icon={faAd} /> Meus Anúncios</TabLabel>
                    <TabContent>
                       
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
                    </TabContent>
                </TabPanel>

                {/* PRODUTOS */}
                <TabPanel>
                    <TabLabel><FontAwesomeIcon icon={faStore} />Meus Produtos</TabLabel>
                    <TabContent>
                        <ul className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview-menu"
                            role="menu"
                            data-accordion="false"
                        >
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">
                                <p>Produtos cadastrados</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos/new" className="nav-link">
                                <p>Cadastrar Produtos</p>
                            </Link>
                        </li>
                    </ul>
                    </TabContent>
                </TabPanel>

                {/* LANDING PAGES */}
                <TabPanel>
                    <TabLabel><FontAwesomeIcon icon={faFileWord} /> Landing Pages</TabLabel>
                    <TabContent>
                      
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
                                <Link to="/landing-pages/new" className="nav-link">
                                    <p>Novas landing page</p>
                                </Link>
                            </li>
                        </ul>
                    </TabContent>
                </TabPanel>

                {/* CHATBOT */}
                {/* <TabPanel>
                    <TabLabel><FontAwesomeIcon icon={faRobot} /> Chatbot</TabLabel>
                    <TabContent>
                      
                     
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
                    </TabContent>
                </TabPanel> */}
            </Tabbordion>
        );
    }
}

export default MenuList;