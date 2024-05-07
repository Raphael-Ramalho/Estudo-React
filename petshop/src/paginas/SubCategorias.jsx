import React from 'react'
import { useParams } from 'react-router'
import ListaPost from '../components/ListaPost'

const SubCategorias = () => {
  const {subcategoria} = useParams()
  return(
    <ListaPost url={`/post?subcategorias=${subcategoria}`} />
  )
}

export default SubCategorias