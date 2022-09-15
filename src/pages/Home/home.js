import React, {Component} from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom'
/* import Header from '../../components/header/Header'; */

class Home extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      populares: [],
      encartel: [],
      favoritos: []
    };
  }    

 componentDidMount(){

    if (localStorage.length > 0) {
     this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [''] })
   } else {
     localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
   }

    const populares = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(populares)
        .then((res)=> res.json())
        .then(datos =>{ 
            console.log(datos)
             return this.setState({
            populares: datos.results,
        })})
        .catch( err => console.log(err))

        const encartel = "https://api.themoviedb.org/3/movie/now_playing?api_key=fcb65972de75954111563f90b05f9fed"
        fetch(encartel)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                 return this.setState({
                encartel: datos.results,
            })})
            .catch( err => console.log(err))
      
    
 }

 handleFavoritos(card){
  if (this.state.favoritos.some(fav => card.id === fav.id)) {
      this.setState({favoritos: this.state.favoritos.filter(item => item.id !== card.id)}, () => {//asincronismo del this.State ",()"
          localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
      })
      console.log(this.state.favoritos.filter(item => item.id !== card.id))
  } else {                                                               
      this.setState({favoritos: [...this.state.favoritos, card]}, () => { //el "..." significa traeme todo lo que estaba en el array favoritos y el ", card" significaa que le agrego la nueva card que te estoy pasando
          localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
      })
  }
}

  render() {
    return ( 
<>
    <div className="titulo">
          <h2>• LO MÁS VISTO EN PELÍCULAS •</h2>
          <Link to='/populares'><button className='vermas'>Ver Mas</button></Link>
    </div>
    <section className='contenedor'>
            {this.state.cargando === false ? (
             <p>Cargando</p>
            ) : (
            this.state.populares.map(pelicula =>(
               <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula)=> this.handleFavoritos(pelicula)}/>)
           )
           )  
            }      
    </section>
    <div className="titulo">
          <h2>• PELÍCULAS EN CARTEL •</h2>
          <Link to='/encartel'><button className='vermas'>Ver Mas</button></Link>
    </div>
    <section className='contenedor1'>
            {this.state.cargando === false ? (
             <p>Cargando</p>
            ) : (
            this.state.encartel.map(pelicula =>(
             <Card key={pelicula.id} pelicula={pelicula}/>)
          )
           )  
            }
    </section>
</>

    
    )
          
    
  }
}
export default Home;