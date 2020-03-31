import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, 
    faHome, 
    faBullhorn, 
    faHeartbeat, 
    faRobot,
    faChartLine ,
    faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

import MenuList from "layout/sidebar/MenuList";



class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sideBarOpen: false
        };

        this.openCloseMenu = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            sideBarOpen: !state.sideBarOpen
        }));
    }

    render() {

        return (
            <aside className="main-sidebar sidebar-collapse sidebar-ads">
                <Link className="brand-link toggle-menu" onClick={this.openCloseMenu}>
                    <Link to="/" style={{width: '100%',display:'inline-block',textAlign:'center'}}>
                        <img src={require('assets/images/g14.png')} style={{width: '130px', justifyItems:'center'}}/>
                    </Link>
                </Link>

                <div className="sidebar">
                    <nav className="mt-2">
                        <MenuList/>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;