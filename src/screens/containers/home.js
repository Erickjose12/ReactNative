//lo primero que se tiene que realizar es importr React
import React, { Component } from 'react';

class Home extends Component{
  render(){
    return this.props.children //retornamos los hijos de home (las otras pantallas )
  }
}

export default Home; //Exportamos nuestro comoponente
