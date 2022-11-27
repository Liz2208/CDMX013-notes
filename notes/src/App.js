import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
//import { Home } from './componentes/Home';
//import { Main } from './componentes/Main';
//import Login from './Login';
//import Tarea from './componentes/Tarea';
//import TareaForm from './componentes/TareaFormulario';
import logo from './images/Dont.png';

function App() {
  return (
    <div className="App">
     <div className='contenedor-logo'>
    <img 
    src={logo}
    className='logo-notes'/>  
      </div>
      <div className='contenedor-principal'>
      
      <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
