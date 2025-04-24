// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage       from './components/HomePage';
import Partite        from './components/Partite';
import CreaPartita    from './components/CreaPartita';
import DettaglioPartita from './components/DettaglioPartita';
import Giocatori      from './components/Giocatori';
import Statistiche    from './components/Statistiche';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CalcettoManager</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/partite">Partite</Link></li>
            <li><Link to="/giocatori">Giocatori</Link></li>
            <li><Link to="/statistiche">Statistiche</Link></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/"                   element={<HomePage />} />
          <Route path="/partite"            element={<Partite />} />
          <Route path="/partite/nuova"      element={<CreaPartita />} />
          <Route path="/partite/:id"        element={<DettaglioPartita />} />
          <Route path="/giocatori"          element={<Giocatori />} />
          <Route path="/statistiche"        element={<Statistiche />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>CalcettoManager © 2025</p>
      </footer>
    </div>
  );
}

export default App;
