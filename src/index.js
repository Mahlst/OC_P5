// Importation des bibliothèques nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation des composants de routage de react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);