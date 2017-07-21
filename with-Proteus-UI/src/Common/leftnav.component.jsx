import React, { Component } from 'react';
import { Link } from 'react-router';

class LeftNav extends Component {
    render(){
        return (
            <div className="leftNavBoxCustom">
                <div id="slidebar-white" className="slidebar-nav">
                    <nav id="navbar-white" className="navbar navbar-default" role="navigation">
                        <ul className="nav navbar-nav leftNavBox">
                            <li className="hidden-xs ckHeading"><a className="navbar-brand">Collaborative Knowledge</a></li>
                            <li className="clearfix"></li>
                            <li>
                                <Link to="/"><i className="glyphicon glyphicon-home"></i><span className="space-10"></span> Home </Link>
                            </li>
                            <li>
                                <a href="#" data-target="#Configurations" data-toggle="collapse">
                                    <i className="glyphicon glyphicon-cog"></i><span className="space-10"></span> Configurations <i id="arrowID" className="glyphicon glyphicon-menu-right leftNavBoxCaret"></i>
                                </a>
                                <ul className="nav nav-stacked collapse" id="Configurations">
                                    <li className="sectionOpenUL">
                                        <Link to="/featureFlagData" className="border-bottom-none">Feature Flag</Link>
                                    </li>
                                    <li className="sectionOpenUL">
                                        <Link to="/preferenceData">Preference</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div> 
            </div>
        );
    }
}

export default LeftNav