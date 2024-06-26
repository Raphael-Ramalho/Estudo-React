import React, { Component } from "react"
import "./estilo.css"



class FormularioCadastro extends Component {

    constructor(props){
        super(props);//sempre q uma classe for extendida a partir de outra, o construtor da classe nova precisa conter o super() para puxar o contrutor da classe original.
        this.titulo="";
        this.texto="";
        this.categoria = "Sem Categoria"
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation()
        this.categoria = evento.target.value
    }

    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value
    }

    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
                >
                <select
                    onChange={this._handleMudancaCategoria.bind(this)} 
                    className="form-cadastro_input" id=""
                >
                    <option value="">Sem Categoria</option>
                    {this.state.categorias.map((categoria, index)=>{
                        return <option key = {index}>{categoria}</option>
                    })}
                </select>
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


