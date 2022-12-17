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
    '2 (dos) Minitartas: Napolitana, Verdura o Calabaza y queso',
    'Ensalada de arroz, jamón, queso, huevo y tomate',
    'Milanesa de pollo con tortilla de papa',
    '3 (tres) Empanadas de pollo o carne',
    'Ensalada Rusa: Pollo, papas, arvejas, zanahoria, huevo y mayonesa',
    'Ensalada Cesar con Pollo / Ensalada de Lentejas',
    'Ensalada de atún: con papas o con arroz',
    'Ensalada Primavera: arroz, jamón, queso, huevos y tomates cherry',
    'Ensalada "Almuerzos": 3 lechugas, tomate, zanahoria y pollo',
    'Sandwich de Milanesa completo',
    'Milanesa (frita o al horno) con Ensalada',
    'Torre de Panqueques',
    'Pebete completo: jamón, queso, lechuga, tomate y huevo',
    'Pebete de jamón y queso',
    'Ñoquis con Bolognesa o Salsa Rosa',
    'Tomates Rellenos',
    'Escalopes de Ternera con Ensaladas (varias)',
    'Milanesa de pollo con Papas al horno o Ensalada',
    'Hamburguesas Caseras con revuelto de zapallitos o Ensalada Rusa',
    'Filet de Merluza o Bifecitos de Cerdo con puré mixto',
    '2 (dos) Omelette de verdura o jamón y queso',
    'Canelones de verdura con tuco y salsa blanca',
    'Ternerita guisada: arroz, verduras, carne, lentejas, papas y salsa',
    'Pastel de papas y/o calabaza',
    'Milanesa napolitana de ternera con puré de papas',
    'Lasagna',
    'Tirabuzones con salsa 4 quesos',
    'Milanesa de pollo (al horno o frita) con papas rústicas o ensalada',
    'Risotto con pollo y vegetales',
    'Milanesa de pollo con papas y batatas fritas',
    'Pollo al horno con papas',
    '3 (tres) Crepe de verduras, pollo y salsa blanca',
    'Revuelto de Gramajo',
    'Pollo crocante con bombas de papa',
    'Raviolones de verdura con salsa rosa o bolognesa',
    'Sorrentinos de jamón y queso con tuco o salsa rosa',
    'Wok de vegetales, pollo y arroz'
  ];

  const menuOrdenado = menus.sort();

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
                            {menuOrdenado.map((menu) => {
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
                            {menuOrdenado.map((menu) => {
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
                            {menuOrdenado.map((menu) => {
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
                            {menuOrdenado.map((menu) => {
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
                            {menuOrdenado.map((menu) => {
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