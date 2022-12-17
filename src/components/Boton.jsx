import React from 'react'

const Boton = ({type, text, onClick}) => {
  return (    
    <button type={type} className="formulario__btn" onClick={onClick}>{text}</button>
  )
}

export default Boton