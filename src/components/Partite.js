// src/components/Partite.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Partite() {
    const [partite, setPartite] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulazione caricamento dati dal backend
    useEffect(() => {
        // In un'app reale, qui faresti una chiamata API
        setTimeout(() => {
            const mockPartite = [
                {
                    id: 1,
                    data: '2025-04-25',
                    ora: '18:30',
                    luogo: 'Centro Sportivo Girasole',
                    statoPartita: 'programmata',
                    numeroGiocatori: 10,
                    giocatoriConfermati: 8
                },
                {
                    id: 2,
                    data: '2025-04-28',
                    ora: '20:00',
                    luogo: 'Calcetto Royal',
                    statoPartita: 'programmata',
                    numeroGiocatori: 10,
                    giocatoriConfermati: 4
                },
                {
                    id: 3,
                    data: '2025-04-18',
                    ora: '19:00',
                    luogo: 'Campo Luna',
                    statoPartita: 'completata',
                    risultato: '6-4',
                    numeroGiocatori: 10,
                    giocatoriConfermati: 10
                }
            ];
            setPartite(mockPartite);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="partite-container">
            <div className="partite-header">
                <h2>Partite</h2>
                <Link to="/partite/nuova" className="btn btn-primary">Nuova Partita</Link>
            </div>

            {loading ? (
                <p>Caricamento partite in corso...</p>
            ) : (
                <>
                    <h3>Prossime Partite</h3>
                    <div className="partite-list">
                        {partite.filter(p => p.statoPartita === 'programmata').map(partita => (
                            <div key={partita.id} className="partita-card">
                                <div className="partita-date">
                                    <div className="giorno">{new Date(partita.data).getDate()}</div>
                                    <div className="mese">{new Date(partita.data).toLocaleString('it-IT', { month: 'short' })}</div>
                                </div>
                                <div className="partita-info">
                                    <h4>{partita.luogo}</h4>
                                    <p>Orario: {partita.ora}</p>
                                    <p className="giocatori-count">
                                        Giocatori: {partita.giocatoriConfermati}/{partita.numeroGiocatori}
                                    </p>
                                </div>
                                <Link to={`/partite/${partita.id}`} className="btn btn-outline">
                                    Dettagli
                                </Link>
                            </div>
                        ))}
                    </div>

                    <h3>Partite Passate</h3>
                    <div className="partite-list">
                        {partite.filter(p => p.statoPartita === 'completata').map(partita => (
                            <div key={partita.id} className="partita-card completed">
                                <div className="partita-date">
                                    <div className="giorno">{new Date(partita.data).getDate()}</div>
                                    <div className="mese">{new Date(partita.data).toLocaleString('it-IT', { month: 'short' })}</div>
                                </div>
                                <div className="partita-info">
                                    <h4>{partita.luogo}</h4>
                                    <p>Risultato: {partita.risultato}</p>
                                </div>
                                <Link to={`/partite/${partita.id}`} className="btn btn-outline">
                                    Dettagli
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Partite;