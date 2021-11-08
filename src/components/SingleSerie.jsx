import React from 'react'
import { useParams, Link } from 'react-router-dom'

function SingleSerie(props) {
  let params = useParams();

  return (
    <div>
      <Link to="/">Volver al Inicio</Link>
      <p>Serie con id: {params.id}</p>
    </div>
  )
}

export default SingleSerie
