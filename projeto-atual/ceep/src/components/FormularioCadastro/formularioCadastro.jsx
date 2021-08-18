import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props){
        super(props);//sempre q uma classe for extendida a partir de outra, o construtor da classe nova precisa conter o super() para puxar o contrutor da classe original.
        this.titulo="";
        this.texto="";
    }
    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value
        console.log(this.texto)
    }

    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.props.driarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Titulo"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                     //O evento onChange é ativado quando o valor do input é alterado. O this é usado porque ele faz referência a uma propriedade do próprio objeto
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro;


