// src/components/Statistiche.js
import React, { useState, useEffect } from 'react';

function Statistiche() {
    const [statistiche, setStatistiche] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulazione caricamento dati
    useEffect(() => {
        setTimeout(() => {
            const mockStatistiche = {
                totalePartite: 32,
                mediaGol: 7.3,
                topScorer: {
                    nome: 'Marco Rossi',
                    gol: 12
                },
                partiteRecenti: [
                    { data: '2025-04-18', risultato: '6-4' },
                    { data: '2025-04-11', risultato: '3-5' },
                    { data: '2025-04-04', risultato: '7-7' }
                ],
                giocatoriAttivi: 14,
                classificaGiocatori: [
                    { nome: 'Marco Rossi', punti: 320 },
                    { nome: 'Andrea Verdi', punti: 280 },
                    { nome: 'Luca Bianchi', punti: 260 },
                    { nome: 'Giulia Neri', punti: 240 },
                    { nome: 'Paolo Gialli', punti: 220 },
                ]
            };
            setStatistiche(mockStatistiche);
            setLoading(false);
        }, 800);
    }, []);

    if (loading) {
        return <div className="statistiche-container"><p>Caricamento statistiche in corso...</p></div>;
    }

    return (
        <div className="statistiche-container">
            <h2>Statistiche</h2>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Partite Giocate</h3>
                    <div className="stat-value">{statistiche.totalePartite}</div>
                </div>
                <div className="stat-card">
                    <h3>Media Gol a Partita</h3>
                    <div className="stat-value">{statistiche.mediaGol}</div>
                </div>
                <div className="stat-card">
                    <h3>Capocannoniere</h3>
                    <div className="stat-value">{statistiche.topScorer.nome}</div>
                    <div className="stat-subtitle">{statistiche.topScorer.gol} gol</div>
                </div>
                <div className="stat-card">
                    <h3>Giocatori Attivi</h3>
                    <div className="stat-value">{statistiche.giocatoriAttivi}</div>
                </div>
            </div>

            <div className="stats-section">
                <h3>Classifica Giocatori</h3>
                <div className="classifica-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Pos.</th>
                            <th>Giocatore</th>
                            <th>Punti</th>
                        </tr>
                        </thead>
                        <tbody>
                        {statistiche.classificaGiocatori.map((giocatore, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{giocatore.nome}</td>
                                <td>{giocatore.punti}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="stats-section">
                <h3>Ultimi Risultati</h3>
                <div className="risultati-recenti">
                    {statistiche.partiteRecenti.map((partita, index) => (
                        <div key={index} className="risultato-card">
                            <div className="risultato-data">
                                {new Date(partita.data).toLocaleDateString('it-IT', {
                                    day: 'numeric',
                                    month: 'short'
                                })}
                            </div>
                            <div className="risultato-score">{partita.risultato}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Statistiche;
