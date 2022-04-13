import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Maps from './components/Maps'
import Character from './components/Character'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Maps />
        <Character />

      </header>
    </div>
  );
}

export default App;
