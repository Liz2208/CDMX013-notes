import React from "react";
import '../style/Home.css'


export function Home() {
  return (
    <div className='welcome'>
      <img className='welcomeImg'
        src={require('../images/Dont.png')}
        alt='notita' />
      <div className="googlebtn">
      <button onclick="activateLasers()" > entremos </button>
        <img className='googlebtn' src={require('../images/btn_google.png')} />
      </div>
    </div>
  );
}

