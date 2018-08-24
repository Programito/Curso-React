import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const empleado ={
                nombre: 'Juan',
                trabajo: 'Desarrollador Web'
        } 
        return (
            // React.createElement(
            //     // 'h1', { id: 'titulo', className: 'encabezado' },
            //     // 'Hola Mundo'
            //     'div',
            //     null,
            //     React.createElement(
            //         'input',
            //          {type: "text", value: 'Value para el Input'}
            //     )
        //)
            <React.Fragment>
                <h1 className="mayusculas"> Detalles de: </h1>
                <p>Nombre : {empleado.nombre} </p>
                <p>Trabajo : {empleado.trabajo} </p>
            </React.Fragment>
        );
    }
}

export default App;