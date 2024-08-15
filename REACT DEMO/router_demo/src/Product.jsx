import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const params = useParams()
  return (
    <div>Productnfgnjgfm - {params.id}</div>
  )
}

export default Product