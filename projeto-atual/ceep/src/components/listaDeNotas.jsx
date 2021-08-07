//os componentes do react são extensões .jsx
import React, { Component } from "react"
import CardNota from "./cardNota.jsx"

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    )

                })}
            </ul>)
    }
}

export default ListaDeNotas;