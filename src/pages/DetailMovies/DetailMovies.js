import React, { Component } from 'react'
import Card from '../../components/card/Card'
class DetailMovies extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            pelicula: {}
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed${this.state.id}`)
            .then(res => res.json())
            .then(data => this.setState({
            pelicula: data
            }))
            .catch(err => console.log(err))
    }

  render(){
    return (
    <>
        <img src={this.state.pelicula.image} alt={this.state.pelicula.name}/>
        <h1>Detalle de {this.state.pelicula.name}</h1>
    </>
  )
}
}

export default DetailMovies;