import React from 'react';
import '../style/Tarea.css';
import { borrar } from "../images/borrar.png";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor' }>
            <div 
            className='tarea-texto'
            onClick={() => completarTarea(id) }>
                {texto}
            </div>
            <div 
            className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}>
                <button  className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea