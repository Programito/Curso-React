import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';


class App extends Component {

  state= {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) =>  {
    const {marca,plan,year} = datos;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de anyos 
    const diferencia = obtenerDiferenciaAnio(year);

    // y por cada anyo restar el 3%
    resultado -= ((diferencia * 3) * resultado ) / 100;
    
    // Americano 15% Asiatico 5 y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    
    // el plan del auto, el basico incrementa el valor 20% y el completa 50%
    let incrementoPlan= obtenerPlan(plan);
    resultado= parseFloat(incrementoPlan * resultado).toFixed(2);

    // crear el objeto para el resumen
    const datosAuto = {
      marca,
      plan,
      year
    }

    this.setState({
      resultado,
      datos: datosAuto
    })
    // console.log(resultado);

  }

  render() {
    return (
      <div className="contenedor">
       <Header 
          titulo="Cotizador de Seguro de auto"
       />
       <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen 
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
       </div>
      </div>
    );
  }
}

export default App;
