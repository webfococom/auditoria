import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/LoadingIcon.css";

class LoadingIcon extends React.Component {
    render() {
        return (

            <span class="loadingicon">Loading...</span>

        );
    }
}

export default LoadingIcon;