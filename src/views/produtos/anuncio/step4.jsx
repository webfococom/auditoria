import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <div class="stepContent">
            	<div class="container">
     
            		<div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            
                            <cite>Confirme as informações abaixo</cite>

                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div class="thumbMiddle mb-3">
                                        <img src={require(`assets/images/camisa-psg.jpg`)}  /> 
                                    </div>  
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Nome do produto</label>
                                        <p>Camisa Jordan x PSG 2019/20</p>
                                        <label for="exampleInputEmail1">Região de anúncio</label>
                                        <p>São Caetano</p>
                                        <label for="exampleInputEmail1">Valor de investimento</label>
                                        <p>R$ 5.000</p>
                                        
                                    </div>
                                </div>
                            </div>

                            

                            
                            
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                            <div class="vertical-center ">
                                <Link to={`/produtos/`} class="btnAnunciar">Publicar Agora</Link>
                            </div>
                        </div>
                    </div>        
                </div>        
            </div>
        );
    }
}

export default Header;