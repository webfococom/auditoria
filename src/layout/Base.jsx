import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import Error404 from "views/errors/error404.jsx";
import routes from "routes/routes.js";

class Base extends React.Component {
    constructor(props) {
        super(props);

        /**
         * Variables
         */
        /*const signupButton = document.getElementById('signup-button'),
            loginButton = document.getElementById('login-button'),
            userForms = document.getElementById('user_options-forms');*/

        /**
         * Add event listener to the "Sign Up" button
         */
        /*signupButton.addEventListener('click', () => {
            userForms.classList.remove('bounceRight');
            userForms.classList.add('bounceLeft');
        }, false);*/

        /**
         * Add event listener to the "Login" button
         */
        /*
        loginButton.addEventListener('click', () => {
            userForms.classList.remove('bounceLeft');
            userForms.classList.add('bounceRight');
        }, false)
        */
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="content-wrapper">
                    <Switch>
                        {routes.map((prop, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={prop.path}
                                    exact={prop.exact}
                                    component={prop.component}

                                />
                            )
                        })}
                        <Route path="*" component={Error404} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Base;