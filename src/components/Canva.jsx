import React from 'react';
import { useContext } from 'react';
import { Contexto } from '../context/contexto';
import Boton from './Boton';
import InputDia from './InputDia';
import exportAsImage from '../utils/exportAsImage';
import { useRef } from 'react';

const Canva = () => {

  const {datos, dia} = useContext(Contexto);
  const exportRef1 = useRef();
  const exportRef2 = useRef();

  return (
  <>
    <InputDia />
    <div className='canva-container'>
      <div className='canva semanal' id='semanal' ref={exportRef1}>
        <div className='textos-canvas'>
          <div className='textos-canvas-dias' >
            <p>{datos.lunes ? 'Lunes' : ''}</p>
            <p>{datos.lunes ? datos.lunes : ''}</p>
          </div>
          <div className='textos-canvas-dias' >
            <p>{datos.martes ? 'Martes' : ''}</p>
            <p>{datos.martes ? datos.martes : ''}</p>
          </div>
          <div className='textos-canvas-dias' >
            <p>{datos.miercoles ? 'Miércoles' : ''}</p>
            <p>{datos.miercoles ? datos.miercoles : ''}</p>
          </div>
          <div className='textos-canvas-dias' >
            <p>{datos.jueves ? 'Jueves' : ''}</p>
            <p>{datos.jueves ? datos.jueves : ''}</p>
          </div>
          <div className='textos-canvas-dias' >
            <p>{datos.viernes ? 'Viernes' : ''}</p>
            <p>{datos.viernes ? datos.viernes : ''}</p>
          </div>          
        </div>
      </div>
      <div className='canva diario' id='diario' ref={exportRef2}>
        <div className='menu-hoy'>
          <p>Menú de Hoy:</p>
          <p>{dia}</p>
        </div>
      </div>      
    </div>    
    <p className='texto-antes-botones-descarga'>Descargar:</p>
    <div className="botones-descarga">
      <Boton type="button" text="Semanal" onClick={() => exportAsImage(exportRef1.current, "Semanal")} />
      <Boton type="button" text="Diario" onClick={() => exportAsImage(exportRef2.current, "Diario")} />
    </div>
  </>
  )
};

export default Canva;