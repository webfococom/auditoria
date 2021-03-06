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
                                
                            <div class="form-group pr-5">
                                <label for="exampleInputEmail1">Escolher produto</label>
                                <input type="text" class="form-control" placeholder="Nome do produto" value="Camisa Jordan x PSG 2019/20" />                                
                                <button class="btn btn-default mt-2">Escolher</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div class="thumbMiddle mb-3">
                                        <img src={require(`assets/images/camisa-psg.jpg`)}  /> 
                                    </div>  
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Nome do produto</label>
                                        <p>Camisa Jordan x PSG 2019/20</p>
                                        <label for="exampleInputEmail1">Valor do produto</label>
                                        <p>299,00</p>
                                        
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>        
                </div>        
            </div>
        );
    }
}

export default Header;