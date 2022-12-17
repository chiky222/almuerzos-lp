import React, { useState } from 'react';
import Boton from './Boton';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { Contexto } from '../context/contexto';

const Formulario = () => {

  const [data, setData] = useState({ lunes: 'Seleccionar', martes: 'Seleccionar', miercoles: 'Seleccionar', jueves: 'Seleccionar', viernes: 'Seleccionar'});
  const menus = [
    '',
    'Bastoncitos de Pollo con Buñuelos de Acelga',
    '2 (dos) Minitartas: Napolitana o Verdura',
    'Ensalada de arroz, jamón, queso, huevo y tomate',
    'Milanesa de pollo con tortilla de papa',
    '3 (tres) Empanadas de pollo o carne',
    'Menú6',
    'Menú7',
    'Menú8',
    'Menú9',
    'Menú10',
    'Menú11',
    'Menú12',
    'Menú13',
    'Menú14',
    'Menú15',
    'Menú16',
    'Menú17',
    'Menú18',
    'Menú19',
    'Menú20',
  ];

  const {datos, setDatos} = useContext(Contexto);

  const enviarConcepto = (e) => {
    if (e) {
        e.preventDefault();
        setDatos(data);
    }
  }  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className='contenedor-formulario'>
        <h1 className='titulo-formulario'>ALMUERZOS LP</h1>
        <h2 className='subtitulo-formulario' >Creador de Menú</h2>
        <hr></hr>       
        <form action='' className='formulario' onSubmit={enviarConcepto} >
                <div className="formulario__grupo">
                    <label htmlFor="lunes" className="formulario__label">Lunes:</label>
                    <div className="formulario__grupo-input">
                        <select name='lunes' className='formulario__selector' id='lunes' value={data.lunes} onChange={handleChange} >
                            {menus.map((menu) => {
                                const idOption = uuidv4();
                                return (
                                    <option id={idOption} key={idOption}>{menu}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="martes" className="formulario__label">Martes:</label>
                    <div className="formulario__grupo-input">
                        <select name='martes' className='formulario__selector' id='martes' value={data.martes} onChange={handleChange} >
                            {menus.map((menu) => {
                                const idOption = uuidv4();
                                return (
                                    <option id={idOption} key={idOption}>{menu}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="miercoles" className="formulario__label">Miércoles:</label>
                    <div className="formulario__grupo-input">
                        <select name='miercoles' className='formulario__selector' id='miercoles' value={data.miercoles} onChange={handleChange} >
                            {menus.map((menu) => {
                                const idOption = uuidv4();
                                return (
                                    <option id={idOption} key={idOption}>{menu}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="jueves" className="formulario__label">Jueves:</label>
                    <div className="formulario__grupo-input">
                        <select name='jueves' className='formulario__selector' id='jueves' value={data.jueves} onChange={handleChange} >
                            {menus.map((menu) => {
                                const idOption = uuidv4();
                                return (
                                    <option id={idOption} key={idOption}>{menu}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="viernes" className="formulario__label">Viernes:</label>
                    <div className="formulario__grupo-input">
                        <select name='viernes' className='formulario__selector' id='viernes' value={data.viernes} onChange={handleChange} >
                            {menus.map((menu) => {
                                const idOption = uuidv4();
                                return (
                                    <option id={idOption} key={idOption}>{menu}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <Boton type="submit" text="Generar" onClick={() => enviarConcepto()} />
        </form>        
        <hr></hr> 
    </div>
  )
};

export default Formulario;