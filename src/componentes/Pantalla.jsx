import React from "react";
import '../hojas-de-estilo/Pantalla.css';

// Componente Pantalla en funcion flecha que recibe como parametro el input

const Pantalla = ({ input }) => {
  return (
    <div className='input'>
      <p>{input}</p>
    </div>
  );
};

export default Pantalla;