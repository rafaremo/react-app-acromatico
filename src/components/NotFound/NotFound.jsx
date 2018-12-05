import React from 'react';
import { Link } from 'react-router-dom';
import './NotFouns.scss';

const NotFound = () => {
    return (
        <div className="NotFound-container">
            <h1>Error 404</h1>
            <p>La página que estás buscando no se encuentra, regresa al inicio haciendo click <Link to="/">aquí</Link></p>
        </div>
    )
};

export default NotFound;