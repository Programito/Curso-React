import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';
import './App.css';


class App extends Component {

  state= {
    termino: '',
    imagenes: [],
    pagina: '',
    cargando: false
  }

  consultarAPI= async() => {
    const termino= this.state.termino;
    const pagina= this.state.pagina;
    const url=`https://pixabay.com/api/?key=10015435-b0bafd1ed8556d78f135eaa08&q=${termino}&per_page=30&page=${pagina}`;
    console.log(url);
    await fetch(url)
      .then(respuesta=>{
        this.setState({
          cargando: true
        });
        return respuesta.json()
      })
      .then(resultado=>{
        this.setState({
            imagenes:resultado.hits,
            cargando: false
        })
      })
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino,
      pagina: 1
    },()=>{
      this.consultarAPI();
    })
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina--;
    this.setState({
      pagina
    }, () => {
      this.consultarAPI();
      this.scroll();
    });
    // console.log(pagina);
  }

  paginaSiguiente= () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina
    },()=>{
      this.consultarAPI();
      this.scroll();
    });
    // console.log(pagina);
  }

  scroll= () => {
    // const elemento= document.querySelector('#resultado');
    const elemento= document.querySelector('.jumbotron');
    // elemento.scrollIntoView('auto','start');
    elemento.scrollIntoView('smooth','start');
  }

  render() {

    const cargando= this.state.cargando;
    let resultado;
    if(cargando){
      resultado = <div className="spinner">
                      <div className="double-bounce1"></div>
                      <div className="double-bounce2"></div>
                  </div>
    }
    else {
      resultado = <Resultado 
                      imagenes={this.state.imagenes}
                      paginaAnterior={this.paginaAnterior}
                      paginaSiguiente={this.paginaSiguiente}
                  />
    }

    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscardor de Imágenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
            {resultado}
        </div>
      </div>
    );
  }
}

export default App;
