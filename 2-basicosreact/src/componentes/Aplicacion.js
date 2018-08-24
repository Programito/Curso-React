import React, {Component} from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

class Aplicacion extends Component{
	
	// constructor(props){
	// 	super();
	// 	this.state={
	// 		productos: [
	// 				{nombre: 'Libro', precio: 200},
	// 				{nombre: 'Disco de Múscia', precio: 100},
	// 				{nombre: 'Instrumento Musical', precio: 800},
	// 				{nombre: 'Reproducto Musical', precio: 1500},
	// 				{nombre: 'Album Ed. Especial', precio: 500}
	// 			]
	// 	};
	// }

	state= {
			productos: []
		};
	
	// metodo cuando esta construido, para consultas a una api
	componentDidMount(){

		const productos=[
			{nombre: 'Libro', precio: 200},
			{nombre: 'Disco de Múscia', precio: 100},
			{nombre: 'Instrumento Musical', precio: 800},
			{nombre: 'Reproducto Musical', precio: 1500},
			{nombre: 'Album Ed. Especial', precio: 500}
		]

		// de esta forma va mas rapido que el this.productos=
		setTimeout(()=>{
			this.setState({
				// productos: productos
				productos
			});
		},1000);
	}
	render(){
		//Hacerlo con props
		// const productos= [
		// 	{nombre: 'Libro', precio: 200},
		// 	{nombre: 'Disco de Múscia', precio: 100},
		// 	{nombre: 'Instrumento Musical', precio: 800},
		// 	{nombre: 'Reproducto Musical', precio: 1500},
		// 	{nombre: 'Album Ed. Especial', precio: 500}
		// ]
		return (
			<div>
				<Header 
					titulo="Nuestra Tienda Virtual"
				/>
				<Productos
					// productos={productos}
					productos= {this.state.productos}
				/>
				<Footer />
			</div>
		);
	}
}

export default Aplicacion;