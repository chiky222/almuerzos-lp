import React from 'react';
import { useState, createContext } from 'react';

export const Contexto = createContext();

const CartProvider = ({ children }) => {

    const [datos, setDatos] = useState({});
    const [dia, setDia] = useState('');
    const [fondo, setFondo] = useState(''); 

    const cambiarFondo = (newFondo) => {
        const semanal = document.getElementById("semanal");
        const diario = document.getElementById("diario");

        if (semanal && diario) {
            const ruta = `url(${newFondo})`;
            semanal.style.backgroundImage = ruta;
            diario.style.backgroundImage = ruta;
        }
    }

    return (
        <Contexto.Provider value={{ cambiarFondo, datos, setDatos, dia, setDia, fondo, setFondo }}>
            {children}
        </Contexto.Provider>
    );
};

export default CartProvider;