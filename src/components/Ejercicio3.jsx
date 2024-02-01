import { useState } from 'react';
const Ejercicio3 = ({mensaje}) => {
        const [mensaje2, setMensaje2] = useState('');
        function mostrarMensaje() {
        const mostrarMensaje = () => {
          setMensaje2('(from changed state)');
        }}
    return (
        <>
        <section>
            <h1 className="display-3 ">(from changed state){mensaje2}</h1>
            <button onClick={mostrarMensaje}>Mostrar mensaje</button>
      <p>{mensaje}</p>
        </section>
        </>
    );
};

export default Ejercicio3;