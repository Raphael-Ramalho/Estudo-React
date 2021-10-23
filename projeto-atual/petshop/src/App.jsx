import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'


function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post/>
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
