import React, { Component } from 'react';
import "./estilo.css"

class ListaDeCategorias extends Component {

  constructor(){
    super()
    this.state = {categorias:[]}
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})// apenas colocar (categorias) não funciona
    console.log(this.state.categorias[0])
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


