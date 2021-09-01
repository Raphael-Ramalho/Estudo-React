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

  componentDidMount(){}
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias ={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} //esse .bind(this.notas) faz referência ao this.notas do contrutor do arquivo Notas.js
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria = {this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias = {this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App; 