import React from 'react' 
import {Link} from 'react-router-dom'

export default function Nav() {
  return (

    <header>
        <nav>
                <div className="burguermenu">
                            
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/">Inicio</Link>
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/populares">Populares</Link>
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/encartel">En Cartel</Link>
                </div>  
                <div className="header-nav">
                    <Link className="header-nav" to='/favourites' aria-current="page">Favoritos</Link>
                </div>
                <div className= "header-busqueda">
                        <form action="" method="GET">
                            <input type="search" name="busqueda"  placeholder="Buscar películas o series"/>
                            <p className="alert"></p>
                        </form>
                        <a href="./results.html"><i className="fas fa-search lupa"></i></a>
                </div>
          </nav>
    </header>
            
  )
}
