import React, { Component } from 'react';
/* import Header from '../../components/header/Header'; */
import Card from '../../components/card/Card';
class Favoritos extends Component {
    constructor(){
        super()
        this.state={
            favoritos:[]
        }
    }

    componentDidMount(){
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
    }

  render() {
    return (
      <p>Favoritos</p>
    )
  }
}

export default Favoritos