import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component{
	render(){
		return(
			<div className="alert alert-primary">
				<p> Presupuesto: {this.props.presupuesto} €</p>
			</div>
		)
	}
}

Presupuesto.propTypes = {
	presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;