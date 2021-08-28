import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from "./components/FormularioCadastro"
import ListaDeCategorias from './components/ListaDeCategorias/listaDeCategorias';
import "./assets/App.css"
import './assets/index.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  constructor(){ 
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas()
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias ={this.categorias.categorias}
          criarNota={this.notas.criarNota} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria = {this.categorias.adicionarCategoria}
            categorias = {this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App; 