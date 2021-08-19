import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  constructor(){
    super()
    this.notas =[]
  }
  
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = {this.criarNota}/>
        <ListaDeNotas notas = {this.notas}/>
      </section>
    );
  }
}

export default App;