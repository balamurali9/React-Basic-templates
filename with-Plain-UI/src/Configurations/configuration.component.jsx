import React, { Component } from 'react';
import { Link } from 'react-router';

class Configuration extends Component {
    render(){
        return (
            <div>
               <div className="container-fluid">
                  <div className="row">
                        <div className="col-sm-3 col-lg-2">
                            <nav className="navbar navbar-default navbar-fixed-side">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/featureFlagData" activeClassName="active">Feature Flag</Link></li>
                                    <li><Link to="/preferenceData" activeClassName="active">Preference</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-sm-9 col-lg-10">
                           {this.props.children}
                        </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Configuration