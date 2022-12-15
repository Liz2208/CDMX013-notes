import React, {useState} from "react";
import TareaForm from "./TareaFormulario";
import '../style/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas (){
    const [tareas, setTareas] = useState([]); //hook

    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim(); // quitamos espacios con trim
            const tareasActualizadas = [tarea, ...tareas]; //mostramos la nueva tarea con las demas
            setTareas(tareasActualizadas);
        }

    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
        setTareas(tareasActualizadas);
    };


    
    return (
        <>
        <TareaForm onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
           {
            tareas.map((tarea) =>
                <Tarea 
                key={tarea.id} //identifica elemento en la lista, no se accede a el
                id={tarea.id} 
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                />
            )
           } 

        </div>
        </>
    );
};

export default ListaDeTareas