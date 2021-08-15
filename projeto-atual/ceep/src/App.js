import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas.jsx';
import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro.jsx"
import "./assets/App.css"
import './assets/index.css';

class App extends Component {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;