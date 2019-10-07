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
    }

    render() {
        console.log( process.env.TESTE3 );

        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div class="content-wrapper">
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