import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {

	mostrarResultado = () => {

		//obtener los datos de la consulta
		let {name,weather,main} = this.props.resultado;

		console.log(this.props.resultado);
	
		// name= "Asdasd";
		// weather=['First'];
		// weather[0]={
		// 	icon: "04d"
		// }
		// main = {
		// 	temp: 293,
		// 	temp_max: 295,
		// 	temp_min: 291
		// }

		if(!name || !weather || !main) return null;

		const kelvin= 273.15;
		const urlIcon=`http://openweathermap.org/img/w/${weather[0].icon}.png`;
		console.log(urlIcon);
		
		return (
			<div className="row">
				<div className="resultado col s12 m8 l6 offset-m2 offset-l3">
					<div className="card-panel light-blue align-center">
						<span className="white-text">
						<h2>Resultado Clima de: {name}</h2>
						<p className="temperatura">
							Actual: {(main.temp - kelvin).toFixed(2)} &deg;C 
							<img src={urlIcon} alt={`Clima de ${name}`} />
						</p> 
						<p> Max. {(main.temp_max-kelvin).toFixed(2)} &deg;C </p>
						<p> Min. {(main.temp_min-kelvin).toFixed(2)} &deg;C </p>
						</span>
					</div>
				</div>
			</div>
		)
	}

	render() { 
		return (  
			<div className="container">
				{this.mostrarResultado()}
			</div>
		);
	}
}

Clima.propTypes = {
	resultado: PropTypes.object.isRequired
}

export default Clima;

