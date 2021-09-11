import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import {Container} from "@material-ui/core"

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro/>
      </Container>
    );
  }
}

export default App;
