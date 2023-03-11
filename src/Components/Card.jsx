import React from 'react'

const Card = ({name, autor, anio}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{autor}</h2>
        <h3>{anio}</h3>
    </div>
  )
}

export default Card