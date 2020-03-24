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
	                    <div className="col-lg-4 col-md-4 col-sm-4">
	                            
	                        <div class="form-group">
	                            <label for="exampleInputEmail1">Escolha a região de anúncio</label>
	                            <input type="text" class="form-control" placeholder="Nome da região" value="São Caetano"/>
	                            
	                        </div>
                        </div>
                    </div>        
                </div>        
            </div>
        );
    }
}

export default Header;