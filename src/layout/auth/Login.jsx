import React from "react";
import { Link } from "react-router-dom";
import "assets/scss/auth.scss";
import { faUser, faLock, faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Teste extends React.Component {
    render() {
        return (
            <section className="user">
                <div className="user_options-container">
                    <div className="user_options-text">
                        <div className="user_options-unregistered">
                            <h2 className="user_unregistered-title">
                                Não tem uma conta?
                            </h2>
                            <p className="user_unregistered-text">
                                Não se preocupe, criar sua conta é simple e rápido.
                            </p>
                              <Link to="/cadastre-se" className="user_unregistered-signup">
                                Criar Conta
                              </Link>
                        </div>

                        <div className="user_options-registered">
                            <h2 className="user_registered-title">
                                Tem uma conta?
                            </h2>
                            <p className="user_registered-text">
                                Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.
                            </p>
                            <Link to="/" className="user_registered-login" id="login-button" >
                                Entrar
                            </Link>
                        </div>
                    </div>

                    <div className="user_options-forms" id="user_options-forms">
                        <div className="user_forms-login">
                            
                            <img src={require('assets/images/logo-cielo.png')} />

                            <h2 className="forms_title">Login</h2>

                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <FontAwesomeIcon icon={faUser} />
                                        <input type="email" placeholder="Email" className="forms_field-input" required autofocus />
                                    </div>
                                    <div className="forms_field">
                                        <FontAwesomeIcon icon={faLock} />
                                        <input type="password" placeholder="Password" className="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <button type="button" className="forms_buttons-forgot">
                                        Esqueceu a senha?
                                    </button>
                                    <Link to="/">
                                        <button type="button" className="forms_buttons-action">
                                            Entrar
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="user_forms-signup">
                            <h2 className="forms_title">Sign Up</h2>
                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input type="text" placeholder="Full Name" className="forms_field-input" required />
                                    </div>
                                    <div className="forms_field">
                                        <input type="email" placeholder="Email" className="forms_field-input" required />
                                    </div>
                                    <div className="forms_field">
                                        <input type="password" placeholder="Password" className="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <input type="submit" value="Sign up" className="forms_buttons-action"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}