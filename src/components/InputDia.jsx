import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../context/contexto'

const InputDia = () => {

  const {datos} = useContext(Contexto);
  const {dia, setDia} = useContext(Contexto);

  const handleChange = () => {
    const element = document.getElementById('dia');
    const diaElegido = element.value;
    setDia(diaElegido);
  }

  return (
    <form action='' className='formulario' >
      <div className="formulario__grupo">
        <label htmlFor="dia" className="formulario__label">Día:</label>
        <div className="formulario__grupo-input">
          <select name='dia' className='formulario__selector' id='dia' value={dia} onChange={() => handleChange()} >
            <option>Seleccionar</option>
            <option>{datos.lunes}</option>
            <option>{datos.martes}</option>
            <option>{datos.miercoles}</option>
            <option>{datos.jueves}</option>
            <option>{datos.viernes}</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default InputDia