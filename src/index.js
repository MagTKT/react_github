import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Search from './components/Search';
import User from './components/User';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Search}/>
        <Route path="user/:username" component={User} /> 
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
