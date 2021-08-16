import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(){
        super();//sempre q uma classe for extendida a partir de outra, o construtor da classe nova precisa conter o super() para puxar o contrutor da classe original.
        this.titulo="";
    }
    handleMudancaTitulo(evento){
        this.titulo = console.log(evento.target.value)
    }

    render() {
        return (
            <form className="form-cadastro">
                <input 
                    type="text" 
                    placeholder="Titulo"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo} //O evento onChange é ativado quando o valor do input é alterado. O this é usado porque ele faz referência a uma propriedade do próprio objeto
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro;