import React, { Component } from 'react';
import "./estilo.css"

class ListaDeCategorias extends Component {

  constructor(){
    super()
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias)
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias)
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})// apenas colocar (categorias) não funciona...
  }

  _handlerEventoInput(e){
    if(e.key === "Enter"){
      let valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria) // a função adicionarCategorias é um metodo da classe categorias que foi instanciada no App.js e passada por props para esse arquivo.
      e.target.value = ""
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
            {this.state.categorias.map((categoria, index)=>{
              return <li key = {index} className="lista-categorias_item">{categoria}</li>
            })}
          
        </ul>
        <input
          type="text"
          className="lista-categorias_input" 
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;


