import React from 'react';
import '../style/TareaFormulario.css'

function TareaForm(props){
    return (
        <form className='tarea-form'>
            <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una nota'
            name='texto'
            />
            <button className='tarea-boton'>
                Agregar Nota
            </button>
        </form>
    )
}

export default TareaForm