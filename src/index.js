// Importation des bibliothèques nécessaires depuis React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importation des composants nécessaires depuis react-router-dom pour la gestion des routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importation du fichier CSS global
import './styles/index.scss'
// Importation des composants de pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Housing from './pages/Housing';

// Création de la racine de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Configuration du routeur pour gérer la navigation */}
    <Router>
      <Routes>
        {/* Définition des routes et des composants associés */}
        <Route path='/' element={<Home />} />
        <Route path='/housing/:id' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);