import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Configuration from './configurations/configuration.component.jsx';
import FeatureFlagData from './configurations/featureFlagData.component.jsx';
import PreferenceData from './configurations/preferenceData.component.jsx';

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/configurations" component={Configuration}>
                <Route path="/featureFlagData" component={FeatureFlagData}/>
                <Route path="/preferenceData" component={PreferenceData}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('container')
);