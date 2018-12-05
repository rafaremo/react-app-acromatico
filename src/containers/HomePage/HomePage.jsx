import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.scss';

class HomePage extends Component {
    componentDidMount(){
        if (localStorage.getItem('id_token')){
            this.props.history.push({pathname: '/servicios'});
        }
    };

    render(){
        return (
            <div className="HomePage-container">
                <img src="./images/logo-white.png" alt="Acromatico Development Logo White" className="HomePage-logo"/>
                <button className="HomePage-button" onClick={this.props.authFunctions.login}>Ingresar</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { authFunctions } = state;
    return {
        authFunctions
    }
};

export default connect(mapStateToProps)(HomePage);