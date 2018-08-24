import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component{
	render(){
		const {cantidadGasto,nombreGasto} = this.props.gasto;
		console.log(cantidadGasto);
		console.log(nombreGasto);
		return(
			<li className="gastos">
				{nombreGasto}
				<span className="gasto"> {cantidadGasto}€</span>
			</li>
		)
	}
}

Gasto.propTypes = {
	gasto: PropTypes.object.isRequired
}

export default Gasto;