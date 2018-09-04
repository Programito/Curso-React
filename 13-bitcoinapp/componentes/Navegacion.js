import Link from 'next/link';
const Navegacion = () => (
	<nav className="navbar navbar-expand navbar-dark bg-warning">
		<div className="container">
			<Link href="/"><a className="navbar-brand">TodoBitcoin</a></Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link href="/"><a className="nav-link">Inicio</a></Link>
					</li>
					<li>
					<Link href="/nosotros"><a className="nav-link">Nosotros</a></Link>
					</li>
				</ul>
			</div>
		</div>
		
	</nav>

	// poner estilos al componente
	// <div>
	// 	<ul>
	// 		<h1>Nombre del Sitio</h1>
	// 		<li><Link href="/"><a>Inicio</a></Link></li>
	// 		<li><Link href="/nosotros"><a>Nosotros</a></Link></li>
	// 	</ul>
	// 	<style jsx>{`
	// 		h1{
	// 			color:red;
	// 		}
	// 		ul {
	// 			background-color: #333;
	// 			list-style:none;
	// 			display:flex;
	// 		}
	// 		ul li {
	// 			padding: .5rem 0;
	// 			margin-right:1rem;
	// 		}
	// 		ul li a {
	// 			font-size:1.2rem;
	// 			color:white;
	// 			text-decoration:none;
	// 		}
		
	// 	`}
	// 	</style>
	// </div>

);

export default Navegacion;