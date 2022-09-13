import React from 'react'
import {Link} from 'react-router-dom'
function Card({pelicula}) {
let {poster_path, title, overview, id} = pelicula

const borrar = () => {
  console.log(borrar)
}

  return (

    <div className="hijo">
        <div className="imagen-port">
            <a href={`/movies/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></a>
            <h3>{title}</h3>
            <p>{overview}</p>
            <button onClick={borrar}>Borrar</button>
            <button><Link to={`/movies/id/${id}`}>Detalle</Link></button>
            <button><Link to={`//id/${id}`}>Ver Más</Link></button>
        </div>
    </div>


  )
}

export default Card