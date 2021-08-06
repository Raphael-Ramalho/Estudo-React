//os componentes do react são extensões .jsx
import React, { Component } from "react"
import CardNota from "./cardNota.jsx"

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
            </ul>)
    }

}