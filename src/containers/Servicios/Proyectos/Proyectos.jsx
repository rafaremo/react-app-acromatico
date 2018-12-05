import React, { Component } from 'react';
import './Proyectos.scss';

class Proyectos extends Component {
  render() {
    return (
      <div className="Proyectos__Container">
        <ul id="proyectos-list">
          <li>Prueba de Proyecto</li>
          <li>Otra Prueba</li>
        </ul>
      </div>
    )
  }
};

export default Proyectos;