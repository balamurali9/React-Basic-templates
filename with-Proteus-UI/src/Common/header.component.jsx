import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render(){
        return (
        <div className="headerNavbar">
	        <nav className="navbar navbar-default headerBox" role="navigation">
                <div className="navbar-header navbar-header-custom">
                    <button href="#menu-toggle" className="slidebar-toggle" id="menu-toggle">
                    <span className="sr-only">Toggle sidebar</span>
                    <span id="toggleButton" className="glyphicon glyphicon-remove white-color"></span>
                    </button>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <span><a className="navbar-brand brandCisco" href="#"></a></span>
                </div>
                <div className="navbar-collapse collapse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x grayBG"></i>
                                <i className="glyphicon glyphicon-search glyphicon-stack glyphicon-stack-1x white-color"></i>
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x greenBG"></i>
                                <i className="glyphicon glyphicon-transfer glyphicon-stack glyphicon-stack-1x white-color"></i>
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x yellowBG"></i>
                                <i className="glyphicon glyphicon-bell glyphicon-stack glyphicon-stack-1x white-color"></i>
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x grayBG"></i>
                                <i className="glyphicon glyphicon-envelope glyphicon-stack glyphicon-stack-1x white-color"></i>
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x redBG"></i>
                                <i className="glyphicon glyphicon-question-sign glyphicon-stack glyphicon-stack-1x white-color"></i>
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                <span className="glyphicon-stack">
                                <i className="glyphicon glyphicon-circle glyphicon-stack-2x border-grey whiteBG"></i>
                                <i className="glyphicon glyphicon-user glyphicon-stack glyphicon-stack-1x"></i>
                                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default Header