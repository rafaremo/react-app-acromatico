import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage/HomePage';
import Callback from './Callback';
import Servicios from './Servicios/Servicios';
import NotFound from '../components/NotFound/NotFound';

class App extends Component {

    render() {

        return (
            <Switch>
                <Route path="/servicios" exact component={Servicios} />
                <Route path="/callback" exact component={Callback} />
                <Route path="/:name" exact component={NotFound}/>
                <Route path="/" component={HomePage} />
            </Switch>
        );
    }
}

export default App;
