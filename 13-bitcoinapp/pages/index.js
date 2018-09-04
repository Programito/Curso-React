import MasterPage from '../componentes/Master';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';
import Eventos from '../componentes/Eventos';
// usar fetch en el servidor
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
	<MasterPage>
		<div className="row">
			<div className="col-12">
				<h2>Precio del Bitcoin</h2>
				<Precio
					precio={props.precioBitcoin}
				 />
			</div>

			<div className="col-md-8">
				<h2 className="my-4">Noticias sobre Bitcoin</h2>
				<Noticias 
					noticias={props.noticias}
				/>
			</div>

			<div className="col-md-4">
				<h2 className="my-4">Próximos Eventos Bitcoin</h2>
				<Eventos
					eventos={props.eventos}
				/>
				{console.log(props.eventos)}
			</div>

		</div>
	</MasterPage>
)

// lo guarda como props
Index.getInitialProps = async() => {
	const precio=await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
	const noticias=await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=fe6dbfe4fdb64347929b44cc6145fffb&language=es');
	const eventos= await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&categories=103&token=5YZQSJRJM7TYSSU34RVZ');

	const resPrecio= await precio.json();
	const resNoticias= await noticias.json();
	const resEventos= await eventos.json();

	return {
		precioBitcoin: resPrecio.data.quotes.USD,
		noticias: resNoticias.articles,
		eventos: resEventos.events
	}
}


export default Index;