import React from "react";
import { Link } from "react-router-dom";
import "assets/scss/auth.scss";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Bot from "views/bot/Bot"


export default class Teste extends React.Component {
    render() {
        return (
            <section className="user">
              <Bot />
            </section>
        );
    }
}