import React from "react";
import Card from "card";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

let card = () => {
    var element = new Card({
        form: 'form',
        container: '.card-wrapper',
        formSelectors: {
            numberInput: 'input#card-number',
            expiryInput: 'input#expiry', // optional — default input[name="expiry"]
            cvcInput: 'input#cvc', // optional — default input[name="cvc"]
            nameInput: 'input#name' // optional - defaults input[name="name"]
        }
        /*placeholders: {
            number: '•••• •••• •••• ••••',
            name: 'Nome igual ao cartão',
            expiry: '••/••••',
            cvc: '•••'
        },
        formSelectors: {
            nameInput: 'input[name="card_name"]'
        }*/
    });
};

class RaioX extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        card();
    }

    render() {
        return (
            <div className="content-header content-ads view-pagamento">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            <div className="card">
                                <div className="card-body">
                                    <form action="" id="form-payment">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <input type="hidden" id="brand" name="brand" defaultValue="" readOnly />
                                            <input type="hidden" id="token_card" name="token_card" defaultValue="" readOnly />

                                            <div className="form-group">
                                                <label htmlFor="card-name">Número do cartão</label>
                                                <input type="text"
                                                       defaultValue=""
                                                       className="form-control"
                                                       name="number"
                                                       id="card-number"
                                                       placeholder="Informe o número do cartão"
                                                       required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Nome</label>
                                                <input type="text"
                                                       defaultValue=""
                                                       className="form-control"
                                                       name="card_name"
                                                       placeholder="Informe o nome igual ao que está no cartão"
                                                       required
                                                />
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Validade</label>
                                                        <input type="text"
                                                               defaultValue=""
                                                               className="form-control"
                                                               name="expiry"
                                                               placeholder="XX/XXXX"
                                                               required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Código verificador</label>
                                                        <input type="text"
                                                               defaultValue=""
                                                               className="form-control"
                                                               name="cvv"
                                                               id="cvv"
                                                               placeholder="XXXX"
                                                               required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className='card-wrapper'></div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <button className="btn btn-block btn-default">
                                                Enviar
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RaioX;