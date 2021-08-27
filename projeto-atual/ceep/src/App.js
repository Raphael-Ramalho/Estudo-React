import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from "./components/FormularioCadastro"
import ListaDeCategorias from './components/ListaDeCategorias/listaDeCategorias';
import "./assets/App.css"
import './assets/index.css';

class App extends Component {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  constructor() {
    super()
    this.state = {//o state é uma funcionalidade basica do react assim como o props. Ele é responsavel por atualizar a visualização dos componentes. Nós desenvolvedores não podemos chamar o metodo render a qualquer momento, mas o react o chama sempre que o state de algum componente é alterado. Normalmente usamos o state como um objeto {} pq podemos adicionar e remover coisas facilmente 
      notas: [],
      categorias: ['Games', 'Musica']
    } 
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota] // similar a const novoArrayNotas = this.state.notas.push(novaNota) 
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado) //o estado é alterado com o metodo setState e como parâmetro, devemos passar o novo estado do componente
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {
      categorias: novoArrayCategorias
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias ={this.state.categorias}
          criarNota={this.criarNota.bind(this)} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria = {this.adicionarCategoria.bind(this)}
            categorias = {this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App; 