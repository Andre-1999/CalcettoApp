// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {Homepage, Profilo, Partite, Statistiche, CreaPartita, DettaglioPartita, Giocatori}       from './components';

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
            <li><Link to="/Profilo">Profilo</Link></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/"                   element={<Homepage />} />
          <Route path="/partite"            element={<Partite />} />
          <Route path="/partite/nuova"      element={<CreaPartita />} />
          <Route path="/partite/:id"        element={<DettaglioPartita />} />
          <Route path="/giocatori"          element={<Giocatori />} />
          <Route path="/statistiche"        element={<Statistiche />} />
          <Route path= "/profilo"           element={<Profilo />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>CalcettoManager © 2025</p>
      </footer>
    </div>
  );
}

export default App;
