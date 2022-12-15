import React, { useState } from 'react';
import '../style/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        console.log('Escribiendo ..');
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        console.log('Enviando formulario..');
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    };

    return (
        <form 
        className='tarea-form'
        onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Write a new Note'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
               New Note 📝
            </button>
        </form>
    )
};

export default TareaForm