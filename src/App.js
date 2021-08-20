import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
/** Importar componentes manuales */
import PeticionApi from './components/PeticionApi.js';
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Word! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <PeticionApi />
      </section>
    </div>
  );
}

export default App;
