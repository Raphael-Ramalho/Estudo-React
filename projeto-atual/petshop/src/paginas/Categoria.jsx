import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import '../assets/css/blog.css'
import ListaPost from '../components/ListaPost'
import { useParams } from 'react-router'
import { Route } from 'react-router-dom'

const Categoria = () => {
    const { id } = useParams()
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <Route>
                <ListaPost url={`/posts/?categoria=${id}`} />
            </Route>
        </>
    )
}

export default Categoria