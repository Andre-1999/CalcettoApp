// src/components/DettaglioPartita.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DettaglioPartita() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [partita, setPartita] = useState(null);
    const [loading, setLoading] = useState(true);
    const [giocatori, setGiocatori] = useState([]);
    const [squadraA, setSquadraA] = useState([]);
    const [squadraB, setSquadraB] = useState([]);

    // Simulazione caricamento dati
    useEffect(() => {
        setTimeout(() => {
            // Mock di una partita
            const mockPartita = {
                id: parseInt(id),
                data: '2025-04-25',
                ora: '18:30',
                luogo: 'Centro Sportivo Girasole',
                statoPartita: 'programmata',
                numeroGiocatori: 10,
                giocatoriConfermati: 8,
                costo: 8,
                note: 'Portare pettorine e pallone'
            };

            // Mock dei giocatori confermati
            const mockGiocatori = [
                { id: 1, nome: 'Marco Rossi', stato: 'confermato' },
                { id: 2, nome: 'Luca Bianchi', stato: 'confermato' },
                { id: 3, nome: 'Andrea Verdi', stato: 'confermato' },
                { id: 4, nome: 'Giulia Neri', stato: 'confermato' },
                { id: 5, nome: 'Paolo Gialli', stato: 'confermato' },
                { id: 6, nome: 'Roberto Blu', stato: 'confermato' },
                { id: 7, nome: 'Francesco Rosa', stato: 'confermato' },
                { id: 8, nome: 'Alessandro Viola', stato: 'confermato' },
            ];

            // Se la partita è completata, aggiungiamo squadre e risultato
            if (id === '3') {
                mockPartita.statoPartita = 'completata';
                mockPartita.risultato = '6-4';
                mockPartita.data = '2025-04-18';

                // Mock delle squadre
                setSquadraA([
                    { id: 1, nome: 'Marco Rossi', gol: 3 },
                    { id: 3, nome: 'Andrea Verdi', gol: 1 },
                    { id: 5, nome: 'Paolo Gialli', gol: 0 },
                    { id: 7, nome: 'Francesco Rosa', gol: 1 },
                    { id: 9, nome: 'Luigi Arancio', gol: 1 }
                ]);

                setSquadraB([
                    { id: 2, nome: 'Luca Bianchi', gol: 2 },
                    { id: 4, nome: 'Giulia Neri', gol: 1 },
                    { id: 6, nome: 'Roberto Blu', gol: 0 },
                    { id: 8, nome: 'Alessandro Viola', gol: 1 },
                    { id: 10, nome: 'Giovanni Marrone', gol: 0 }
                ]);
            }

            setPartita(mockPartita);
            setGiocatori(mockGiocatori);
            setLoading(false);
        }, 800);
    }, [id]);

    const generaSquadre = () => {
        // In un'app reale, questo potrebbe essere più complesso
        // e tener conto delle statistiche dei giocatori
        const shuffled = [...giocatori].sort(() => 0.5 - Math.random());
        const half = Math.ceil(shuffled.length / 2);

        setSquadraA(shuffled.slice(0, half));
        setSquadraB(shuffled.slice(half));

        alert("Squadre generate con successo!");
    };

    const concludiPartita = () => {
        // In un'app reale, qui apriresti un form per inserire il risultato
        const goalA = prompt("Inserisci i gol della Squadra A:", "0");
        const goalB = prompt("Inserisci i gol della Squadra B:", "0");

        if (goalA !== null && goalB !== null) {
            setPartita(prev => ({
                ...prev,
                statoPartita: 'completata',
                risultato: `${goalA}-${goalB}`
            }));

            alert("Partita conclusa con successo!");
        }
    };

    if (loading) {
        return <div className="dettaglio-partita-container"><p>Caricamento dati partita...</p></div>;
    }

    return (
        <div className="dettaglio-partita-container">
            <div className="dettaglio-header">
                <button className="btn btn-outline" onClick={() => navigate('/partite')}>
                    ← Torna alle Partite
                </button>
                <h2>Dettaglio Partita</h2>
            </div>

            <div className="card partita-info-card">
                <div className="partita-info-header">
                    <div className="partita-data">
                        <div className="giorno">{new Date(partita.data).getDate()}</div>
                        <div className="mese">{new Date(partita.data).toLocaleString('it-IT', { month: 'short' })}</div>
                    </div>
                    <div className="partita-stato">
            <span className={`stato-badge ${partita.statoPartita}`}>
              {partita.statoPartita === 'programmata' ? 'In programma' : 'Completata'}
            </span>
                    </div>
                </div>

                <div className="partita-details">
                    <div className="detail-item">
                        <strong>Ora:</strong> {partita.ora}
                    </div>
                    <div className="detail-item">
                        <strong>Luogo:</strong> {partita.luogo}
                    </div>
                    <div className="detail-item">
                        <strong>Giocatori:</strong> {giocatori.length}/{partita.numeroGiocatori}
                    </div>
                    {partita.costo && (
                        <div className="detail-item">
                            <strong>Costo:</strong> €{partita.costo} a persona
                        </div>
                    )}
                    {partita.note && (
                        <div className="detail-item">
                            <strong>Note:</strong> {partita.note}
                        </div>
                    )}
                    {partita.risultato && (
                        <div className="detail-item risultato">
                            <strong>Risultato:</strong> <span className="score">{partita.risultato}</span>
                        </div>
                    )}
                </div>
            </div>

            {partita.statoPartita === 'programmata' && (
                <div className="actions-container">
                    <button className="btn btn-primary" onClick={generaSquadre} disabled={giocatori.length < 2}>
                        Genera Squadre
                    </button>
                    <button className="btn btn-secondary" onClick={concludiPartita} disabled={giocatori.length < 2}>
                        Concludi Partita
                    </button>
                </div>
            )}

            {(squadraA.length > 0 || squadraB.length > 0) && (
                <div className="squadre-container">
                    <h3>Squadre</h3>
                    <div className="squadre-grid">
                        <div className="squadra-card">
                            <h4>Squadra A</h4>
                            <ul className="giocatori-list">
                                {squadraA.map((giocatore) => (
                                    <li key={giocatore.id}>
                                        {giocatore.nome}
                                        {giocatore.gol > 0 && <span className="gol-badge">{giocatore.gol} gol</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="squadra-card">
                            <h4>Squadra B</h4>
                            <ul className="giocatori-list">
                                {squadraB.map((giocatore) => (
                                    <li key={giocatore.id}>
                                        {giocatore.nome}
                                        {giocatore.gol > 0 && <span className="gol-badge">{giocatore.gol} gol</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="giocatori-container">
                <h3>Giocatori Confermati</h3>
                <div className="giocatori-grid">
                    {giocatori.map((giocatore) => (
                        <div key={giocatore.id} className="giocatore-card">
                            <div className="giocatore-name">{giocatore.nome}</div>
                            <div className="giocatore-status">{giocatore.stato}</div>
                        </div>
                    ))}

                    {/* Slot disponibili */}
                    {Array.from({ length: partita.numeroGiocatori - giocatori.length }, (_, i) => (
                        <div key={`empty-${i}`} className="giocatore-card empty">
                            <div className="giocatore-name">Posto Disponibile</div>
                            <button className="btn btn-sm btn-outline">Invita</button>
                        </div>
                        ))}
                </div>
            </div>
        </div>
);
}

export default DettaglioPartita;