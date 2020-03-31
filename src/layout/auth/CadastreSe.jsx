import React from "react";
import "assets/scss/auth.scss";
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