import React, {Component} from 'react';
import { Link } from 'react-router';

import Header from './header.component.jsx'
import LeftNav from './leftnav.component.jsx'

class Main extends Component {
    render(){
        return(
            <div id="wrapper">
                {/* sidebar-nav  left Nav*/}
                    <LeftNav />
                {/* sidebar-nav left Nav */}  
            {/* Page Content */}
            <div id="page-wrapper">
                {/* Header */}
                    <Header />
                {/* Header */}
                <div className="container-fluid">
                    <div className="col-md-12 loader">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Main