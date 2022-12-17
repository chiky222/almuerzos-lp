import React from 'react';
import { useState, createContext } from 'react';

export const Contexto = createContext();

const CartProvider = ({ children }) => {

    const [datos, setDatos] = useState({});
    const [dia, setDia] = useState('');

    const cambiarFondo = (newFondo) => {
        var semanal = document.getElementById("semanal");
        var diario = document.getElementById("diario");

        if (semanal && diario) {
            const ruta = `url(${newFondo})`;
            semanal.style.backgroundImage = ruta;
            diario.style.backgroundImage = ruta;
        }
    }

    return (
        <Contexto.Provider value={{ cambiarFondo, datos, setDatos, dia, setDia }}>
            {children}
        </Contexto.Provider>
    );
};

export default CartProvider;