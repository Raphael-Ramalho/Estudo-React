import React from 'react';
import { ListaDeNotas } from './components/listaDeNotas.jsx';
import {FormularioCadastro} from "./components/formularioCadastro"

function App() {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados). o ListaDeNotas é um componente
  return (
    <section>
      <FormularioCadastro></FormularioCadastro>
      <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

export default App;
