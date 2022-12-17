import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Contexto } from '../context/contexto';
import Boton from './Boton';

const BotonesFondo = () => {

  const { cambiarFondo, fondo, setFondo } = useContext(Contexto);

  const fondoDinamico = (newFondo) => {
    if (newFondo !== fondo) {
      setFondo(newFondo);
      cambiarFondo(fondo);
    }
  }

  return (

    <div className='botones-fondos'>
        <Boton type="button" text="Fondo 1" onClick={() => fondoDinamico('https://res.cloudinary.com/dyfvpilfz/image/upload/v1671220387/1_uqogoj.jpg')} />
        <Boton type="button" text="Fondo 2" onClick={() => fondoDinamico('https://res.cloudinary.com/dyfvpilfz/image/upload/v1671220386/2_nfc17z.jpg')} />
        <Boton type="button" text="Fondo 3" onClick={() => fondoDinamico('https://res.cloudinary.com/dyfvpilfz/image/upload/v1671220387/3_nqp8vq.jpg')} />
        <Boton type="button" text="Fondo 4" onClick={() => fondoDinamico('https://res.cloudinary.com/dyfvpilfz/image/upload/v1671220387/4_mnhssg.jpg')} />
        <Boton type="button" text="Fondo 5" onClick={() => fondoDinamico('https://res.cloudinary.com/dyfvpilfz/image/upload/v1671220386/5_jiuxyd.jpg')} />
    </div>
  )
};

export default BotonesFondo;