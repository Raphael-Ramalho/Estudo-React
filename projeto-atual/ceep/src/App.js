import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  constructor(){
    super()
    this.state = {
      notas:[]
    } //o state é uma funcionalidade basica do react assim como o props. Ele é responsavel por atualizar a visualização dos componentes. Nós desenvolvedores não podemos chamar o metodo render a qualquer momento, mas o react o chama sempre que o state de allgum componente é alterado. Normalmente usamos o state como um objeto {} pq podemos adicionar e remover coisas facilmente 
  }
  
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota] // similar a const novoArrayNotas = this.state.notas.push(novaNota) 
    const novoEstado ={
      notas: novoArrayNotas
    }
    this.setState(novoEstado) //o estado é alterado com o metodo setState e como parâmetro, devemos passar o novo estado do componente
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = {this.criarNota.bind(this)}/>
        <ListaDeNotas notas = {this.state.notas}/>
      </section>
    );
  }
}

export default App;