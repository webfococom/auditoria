import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import LayoutBase from "./layout/Base";
import Login from "layout/auth/Login";
import CadastreSe from "layout/auth/CadastreSe";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/scss/style.scss";
import "./assets/js/scripts";

const hist = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/login" render={props => <Login {...props}/>} />
                    <Route path="/cadastre-se" render={props => <CadastreSe {...props}/>} />
                    <Route path="/" render={props => <LayoutBase {...props} />} />
                </Switch>
            </Router>
        );
    }
}
    