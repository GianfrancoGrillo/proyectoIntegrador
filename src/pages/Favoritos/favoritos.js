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
    console.log('Primer renderizado')
    this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) })
  }

  
 handleFavoritos(card){
  console.log('Fede')
  if (this.state.favoritos.some(fav => card.id === fav.id)) { 
    console.log('Fede primer if')
      this.setState({favoritos: this.state.favoritos.filter(item => item.id !== card.id)}, () => {//asincronismo del this.State ",()"
          localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
      })
  } else {                       
      console.log('Fede segundo if')                                        
      this.setState({favoritos: [...this.state.favoritos, card]}, () => { //el "..." significa traeme todo lo que estaba en el array favoritos y el ", card" significaa que le agrego la nueva card que te estoy pasando
          localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
      })
  }
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