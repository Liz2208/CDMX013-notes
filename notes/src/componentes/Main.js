import React from "react";
import '../style/Main.css';

export function Main () {
    return (
        <div className='main'>
          <div className="logo-contenedor"> 
          <img className='btn_save'
              src={require('../images/Dont.png')}
              />
          </div> 
        
          <div className="lista-principal"> 
          <h1>My Notes </h1>
          </div> 

            <div className="notes">
           
            <img className='btn_save'
              src={require('../images/salvar.gif')}
            />
          </div>    
        </div>
    );
}

