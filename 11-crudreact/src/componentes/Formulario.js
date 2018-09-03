import React, { Component } from 'react';

class Formulario extends Component {

	// crear los refs
	tituloRef= React.createRef();
	entradaRef=React.createRef();

	crearPost= (e) => {
		e.preventDefault();
		
		// leer los refs
		const post={
			title: this.tituloRef.current.value,
			body: this.entradaRef.current.value,
			userId: 1
		}

		// console.log(post);
		// enviar los props o peticion de axios
		this.props.crearPost(post);

	}

	render() { 
		return ( 
			<form onSubmit={this.crearPost} className="col-8">
				<legend className="text-center">Crear Nuevo Post</legend>
				<div className="form-group">
					<label> Titulo del Post:</label>
					<input ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo del Post"/>
				</div>
				<div className="form-group">
					<label> Contenido:</label>
					<textarea ref={this.entradaRef} className="form-control" placeholder="Contenido"></textarea>
				</div>
				<button type="submit" className="btn btn-primary">Crear</button>
			</form>
		 );
	}
}
 
export default Formulario;