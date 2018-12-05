import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import * as ActionTypes from '../store/actions/actions';

class Callback extends Component {
    componentDidMount(){
        this.props.onLogin();
    }

    render() {
        if (this.props.isAuthenticated){
            return (
                <Redirect to="/servicios" />
            )
        } else {
            return (
                <div className="App-callback-page">
                    <img src="./images/small-logo-square.png" alt="Loading..." className="App-loading-logo"/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    const { authFunctions, isAuthenticated, userId, profile } = state;
    return {
        authFunctions,
        isAuthenticated,
        userId,
        profile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(ActionTypes.login())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Callback);