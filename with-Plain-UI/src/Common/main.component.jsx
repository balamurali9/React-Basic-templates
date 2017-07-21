import React, {Component} from 'react';
import { Link } from 'react-router';

import Header from './header.component.jsx'
import Footer from './footer.component.jsx'

class Main extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main