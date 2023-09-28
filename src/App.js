import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Ingredientes from './componentes/Ingredientes'; 
import Recetas from './componentes/Recetas';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {}
          <Route path="/" element={<Inicio />} />
          <Route path="/Ingredientes" element={<Ingredientes />} /> 
          <Route path="/Recetas" element={<Recetas />} />
        </Routes> {}
      </div>
    </Router>
  );
}

export default App;
