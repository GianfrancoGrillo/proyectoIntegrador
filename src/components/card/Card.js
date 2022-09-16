import React from 'react'
import {Link} from 'react-router-dom'


function Card(props) {
let {poster_path, title, overview, id} = props.pelicula



  return (

    <div className="hijo">
        <div className="imagen-port">
            <Link to={`/movies/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></Link>
            <h3>{title}</h3>
            <p>{overview}</p>                             {/*  los eventos se colocan en el jsx del componente, osea, adentro del div */}
            <button onClick={()=> props.borrarCard(id)}>Borrar</button> {/* para definir en que momento se ejecuta un estado, debemos agregar un evento en forma de atributo */}
            <button><Link to={`/movies/id/${id}`}>Detalle</Link></button>
            <button><Link to={`//id/${id}`}>Ver Más</Link></button>
            <button onClick= {()=> props.favorito(props.pelicula)}>❤</button>
        </div>
    </div>


  )
}

export default Card