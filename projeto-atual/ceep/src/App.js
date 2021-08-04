import React from 'react';
import { ListaDeNotas } from './components/listaDeNotas.jsx';

function App() {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o App é chamado de componente
  return (
    <section>
      <form>
        <input type = "text" placeholder="Titulo"></input>
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

export default App;
