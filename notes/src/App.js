import './App.css';
//import { Home } from './componentes/Home';
import { Main } from './componentes/Main';
//import Login from './Login';
//import Tarea from './componentes/Tarea';
import TareaForm from './componentes/TareaFormulario';


function App() {
  return (
    <div className="App">
     <div className='contenedor-principal'>
     <h1>MIS TAREAS</h1>
     <TareaForm />
      </div>
    </div>
  );
}

export default App;
