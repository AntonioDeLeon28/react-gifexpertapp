// Este componente muestra la imagen y el título de cada imagen en la pagina web

import React from 'react'

export const GifGridItem = ( { title, url } ) => {

  return (
    <div className="card animate__animated animate__bounce">
        <img src={ url } alt={ title } />
        <p> { title } </p>
    </div>
  )
}
