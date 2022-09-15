import React, { Component } from 'react';
import Card from '../../components/card/Card';
/* import Header from '../../components/header/Header'; */

class Populares extends Component {
   
  constructor() {
    super();
    this.state = {
      cargando: true,
      populares: [],
    };
  }    

  componentDidMount(){
    const populares = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(populares)
        .then((res)=> res.json())
        .then(datos =>{ 
            console.log(datos)
             return this.setState({
            populares: datos.results,
            more: datos.page
        })})
        .catch( err => console.log(err))    
    
 }

 agregarMas(){
  const more = `https://api.themoviedb.org/3/movie/popular?api_key=c0945689b0a582e110971301d6ea8be2&language=es&page=${this.state.more+1}`
  fetch(more)
      .then((res)=>res.json())
      .then(data=>this.setState({
          more:data.page,
          populares: this.state.populares.concat(data.results)
      }))
      .catch((error)=>{console.log(error)})
}

  render() {
    return (
      <>
       <div className="titulo">
              <h2>• PELÍCULAS POPULARES •</h2>
              <button onClick={()=>this.agregarMas()} >Ver Más Peliculas</button>
       </div>
       <section className='contenedor'>
                {this.state.cargando === false ? (
                 <p>Cargando</p>
               ) : (
                this.state.populares.map(pelicula =>(
                   <Card key={pelicula.id} pelicula={pelicula}/>)
              )
              )  
                }      
       </section>
      </>
    )
  }
}

export default Populares