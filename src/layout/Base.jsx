import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Error404 from "views/errors/error404.jsx";
import routes from "routes/routes.js";
import { connect } from 'react-redux';

class Base extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(`userLogged ${this.props.userLogged}`);

        if (!this.props.userLogged) {
            return <Redirect to="/login" />
        }

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
            </div>
        );
    }
}

const mapStateToProps = store => ({
    userLogged: store.isLoggedState.status
});

export default connect(mapStateToProps)(Base);