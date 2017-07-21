import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render(){
        return (
	        <div className="navLinksOnly">
	        	<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src="./cisco-logo-png-72X38.png" alt="Cisco" />
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/about" activeClassName="active">Help</Link></li>
                                <li><Link to="/configurations" activeClassName="active">Configurations</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
	        </div>
        );
    }
}

export default Header