import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Ingredientes from './componentes/Ingredientes'; 
import Recetas from './componentes/Recetas';
import Receta from './componentes/Receta';
import Nostros from './componentes/SobreNosotros';


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
          <Route path="/recetas/:id" component={Receta} />
          <Route path="/SobreNosotros" element={<Nostros/>} />
        </Routes> {}
      </div>
    </Router>
  );
}

export default App;
