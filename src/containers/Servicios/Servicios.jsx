import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SideNav, SideNavItem } from 'react-materialize';
import * as ActionTypes from "../../store/actions/actions";

import './Servicios.scss';

import Proyectos from './Proyectos/Proyectos';

class Servicios extends Component {
    componentDidMount(){
        if(localStorage.getItem('id_token')){
            this.props.onLogin();
        }
    }

    render(){
        if (!this.props.isAuthenticated){
            return (
                <div className="HomePage-container">
                    <img src="./images/logo-white.png" alt="Acromatico Development Logo White" className="HomePage-logo"/>
                    <h3>Debes iniciar sesión para continuar...</h3>
                    <p>No haz iniciado sesión en la plataforma de servicios de Acromático, inicia sesión <Link to="/">aquí</Link></p>
                </div>
            )
        } else {
            let mainAreaStyle = {};
            if(this.props.windowFunctions.isMobile()){
                mainAreaStyle = {
                    width: '100%'
                }
            } else {
                mainAreaStyle = {
                    width: `${this.props.windowFunctions.getWidth() - 300}px`,
                    position: 'absolute',
                    left: '300px'
                }
            }

            return (
                <div className='Servicios__Container'>
                    <SideNav fixed id='sideNav'>
                        <SideNavItem userView
                                     user={{
                                         background: './images/code.jpg',
                                         image: this.props.profile.picture,
                                         name: this.props.profile.nickname,
                                         email: this.props.profile.name
                                     }}
                        />
                        <SideNavItem icon='work'>Proyectos</SideNavItem>
                        <SideNavItem icon='face'>Clientes</SideNavItem>
                        <SideNavItem icon='shopping_cart'>Productos / Servicios</SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem subheader>Configuración</SideNavItem>
                        <SideNavItem waves onClick={() => this.props.onLogout(this.props.history)}>Logout</SideNavItem>
                    </SideNav>
                    <div className='Servicios__Main-area' style={mainAreaStyle}>
                        <nav className='Servicios__Barra'>
                            <img src="./images/logo-white.png" alt="Acromático Development"/>
                        </nav>
                        <Proyectos />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    const { authFunctions, windowFunctions, isAuthenticated, userId, profile } = state;
    return {
        authFunctions,
        windowFunctions,
        isAuthenticated,
        userId,
        profile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(ActionTypes.loggedIn()),
        onLogout: (history) => dispatch({ type: ActionTypes.LOGOUT, history })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Servicios);