import React, { Component } from 'react';
/* import Header from '../../components/header/Header'; */
import Card from '../../components/card/Card';

class Favoritos extends Component {
  constructor() {
    super()
    this.state = {
      favoritos: []
    }
  }

  componentDidMount() {
    this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) })
  }

  render() {
    return (
      <>

        { this.state.favoritos.length > 0 ? this.state.favoritos.map(pelicula => <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula) => this.handleFavoritos(pelicula)} />):<p> cargando</p>}


      </>
    )
  }
}

export default Favoritos