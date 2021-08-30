import React, { Component } from 'react';
import "./estilo.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg" // o D do DeleteSVG precisa ser maiúsculo

class CardNota extends Component {

    apagar(){
        const indice = this.props.indice
        this.props.apagarNota(indice) //Esse apagarNota é na verdade o deletar nota do arquivo App.js. Seu nome está diferete porque no App.js, ele foi passado por props com outro nome (apagarNota, que foi repetido no arquivo listaDeNotas)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick = {this.apagar.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
} 

export default CardNota;



