import React from 'react';

function App() {// o App() deve devolver apenas um elemento. dessa forma, o form e o ul devem estar dentro de um container qualquer(devem estar encapsulados)
  return (
    <section>
      <form>
        <input type = "text" placeholder="Titulo"></input>
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default App;
