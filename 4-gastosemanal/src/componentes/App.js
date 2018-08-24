import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount(){
   this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })

    } else {
      this.obtenerPresupuesto();
    }
  }

  // Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // tomar una copia del state actual
    const gastos = {...this.state.gastos};

    //agregar al gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    // console.log(gastos);

    // restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);


    //ponerlo en state
    this.setState({
      gastos
    })
  }

  // Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    //leer el gasto
    let restar= Number(cantidad);

    // Tomar una copia del state actual
    let restante = this.state.restante;

    // lo restamos
    restante -= restar;
    // console.log('restante es' + restante);

    // convertirlo a string por el prototype
    restante= String(restante);

    // agregamos al nuevo state
    this.setState({
      restante
    })
  }


  render() {
    return (
      <div className="App container fondo">
        <Header
          titulo='Gasto Semanal'
        />
        <div className="contenido-principal contenido">
            <div className="row">
                <div className="one-half column izquierda">
                  <Formulario 
                    agregarGasto = {this.agregarGasto}
                  />
                </div>
                <div className="one-half column derecha">
                  <Listado 
                    gastos= {this.state.gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={this.state.presupuesto}
                    restante={this.state.restante}
                  />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
