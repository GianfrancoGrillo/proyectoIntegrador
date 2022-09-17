import React, {Component}from 'react'
import {Link} from 'react-router-dom'

export default class Card extends Component {

  constructor(props){
      super(props)
      this.state = {
         descripcion: false
      }
  }

  vermas() {
    if (this.state.descripcion) { 
      this.setState({descripcion: false })

    }else {
      this.setState({descripcion: true })
    }
    console.log("vermas")
  }

 
  render() {
    let {poster_path, title, overview, id} = this.props.pelicula
      return (
        <div className="hijo">
        <div className="imagen-port">
            <Link to={`/movies/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></Link>
            <h3>{title}</h3>                            {/*  los eventos se colocan en el jsx del componente, osea, adentro del div */}
            <button onClick={()=> this.props.borrarCard(id)}>Borrar</button> {/* para definir en que momento se ejecuta un estado, debemos agregar un evento en forma de atributo */}
            <button><Link to={`/movies/id/${id}`}>Detalle</Link></button>

           {this.state.descripcion=== true ? <p>{this.props.pelicula.overview} <button onClick={()=> this.vermas()}>Ver menos</button>  </p> : <button onClick={()=> this.vermas()}>Ver mas</button> }

            <button onClick= {()=> this.props.favorito(this.props.pelicula)}>❤</button>
        </div>
    </div>

      )
  }
}


