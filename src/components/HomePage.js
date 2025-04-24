// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import matchHistory from '../data/MatchHistory';





/**
 * Rappresenta la singola riga di partite con le informazioni:
 * data, via, nome del campo, giocatori squadra A, giocatori squadra B, MVP, risultato
 */
function MatchRow({ match }) {
  return (
    <div className="match-row">
      <div className="match-date">{match.date}</div>
      <div className="match-field">
        <strong>Campo:</strong> {match.fieldName}, {match.street}
      </div>
      <div className="match-teams">
        <div className="team team-a">
          <strong>Squadra A:</strong> {match.teamA.players.join(', ')}
        </div>
        <div className="team team-b">
          <strong>Squadra B:</strong> {match.teamB.players.join(', ')}
        </div>
      </div>
      <div className="match-mvp">
        <strong>MVP:</strong> {match.mvp}
      </div>
      <div className="match-score">
        <strong>Risultato:</strong> {match.scoreA} - {match.scoreB}
      </div>
    </div>
  );
}

function HomePage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Prendiamo i dati dal file
    const history = matchHistory;
    // Ordiniamo per data decrescente
    const sorted = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));
    setMatches(sorted);
  }, []);

  return (
    <div className="home-container">
      <h2>Ultime Partite Giocate</h2>
      {matches.length > 0 ? (
        <div className="matches-list">
          {matches.map(match => (
            <MatchRow key={match.id} match={match} />
          ))}
        </div>
      ) : (
        <p>Nessuna partita disponibile.</p>
      )}
      <div className="action-buttons">
        <Link to="/partite/nuova" className="btn btn-primary">Organizza Partita</Link>
        <Link to="/partite" className="btn btn-secondary">Vedi Partite</Link>
      </div>
    </div>
  );
}

export default HomePage;
