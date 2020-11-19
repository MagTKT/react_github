import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Repos from './components/Repos';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User} > 
                <Route path="repos" component={Repos} />
            </Route> 
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
