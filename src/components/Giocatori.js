// src/components/Giocatori.js
import React, { useState, useEffect } from 'react';

function Giocatori() {
    const [giocatori, setGiocatori] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nuovoGiocatore, setNuovoGiocatore] = useState({ nome: '', email: '', telefono: '' });
    const [showForm, setShowForm] = useState(false);

    // Simulazione caricamento dati
    useEffect(() => {
        setTimeout(() => {
            const mockGiocatori = [
                { id: 1, nome: 'Marco Rossi', partiteGiocate: 15, gol: 12, vittorie: 8, avatar: '/api/placeholder/50/50' },
                { id: 2, nome: 'Luca Bianchi', partiteGiocate: 12, gol: 5, vittorie: 7, avatar: '/api/placeholder/50/50' },
                { id: 3, nome: 'Andrea Verdi', partiteGiocate: 18, gol: 8, vittorie: 10, avatar: '/api/placeholder/50/50' },
                { id: 4, nome: 'Giulia Neri', partiteGiocate: 10, gol: 6, vittorie: 6, avatar: '/api/placeholder/50/50' },
            ];
            setGiocatori(mockGiocatori);
            setLoading(false);
        }, 800);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuovoGiocatore(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In un'app reale, qui faresti una chiamata API POST
        const newPlayer = {
            id: giocatori.length + 1,
            nome: nuovoGiocatore.nome,
            partiteGiocate: 0,
            gol: 0,
            vittorie: 0,
            avatar: '/api/placeholder/50/50'
        };

        setGiocatori([...giocatori, newPlayer]);
        setNuovoGiocatore({ nome: '', email: '', telefono: '' });
        setShowForm(false);
    };

    return (
        <div className="giocatori-container">
            <div className="giocatori-header">
                <h2>Giocatori</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Annulla' : 'Aggiungi Giocatore'}
                </button>
            </div>

            {showForm && (
                <div className="nuovo-giocatore-form">
                    <h3>Aggiungi Nuovo Giocatore</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={nuovoGiocatore.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={nuovoGiocatore.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Telefono</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={nuovoGiocatore.telefono}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Salva Giocatore</button>
                    </form>
                </div>
            )}

            {loading ? (
                <p>Caricamento giocatori in corso...</p>
            ) : (
                <div className="giocatori-list">
                    <table className="giocatori-table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Partite</th>
                            <th>Gol</th>
                            <th>Vittorie</th>
                            <th>Azioni</th>
                        </tr>
                        </thead>
                        <tbody>
                        {giocatori.map(giocatore => (
                            <tr key={giocatore.id}>
                                <td>
                                    <img src={giocatore.avatar} alt={giocatore.nome} className="avatar" />
                                </td>
                                <td>{giocatore.nome}</td>
                                <td>{giocatore.partiteGiocate}</td>
                                <td>{giocatore.gol}</td>
                                <td>{giocatore.vittorie}</td>
                                <td>
                                    <button className="btn btn-sm">Dettagli</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Giocatori;