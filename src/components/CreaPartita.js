// src/components/CreaPartita.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreaPartita() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        data: '',
        ora: '',
        luogo: '',
        numeroGiocatori: 10,
        note: '',
        costo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In un'app reale, qui faresti una chiamata API POST

        console.log("Nuova partita creata:", formData);
        alert("Partita creata con successo!");

        // Torna alla lista delle partite
        navigate('/partite');
    };

    return (
        <div className="crea-partita-container">
            <h2>Organizza Nuova Partita</h2>

            <form onSubmit={handleSubmit} className="partita-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="data">Data</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            value={formData.data}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ora">Ora</label>
                        <input
                            type="time"
                            id="ora"
                            name="ora"
                            value={formData.ora}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="luogo">Luogo</label>
                    <input
                        type="text"
                        id="luogo"
                        name="luogo"
                        placeholder="Nome del centro sportivo"
                        value={formData.luogo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="numeroGiocatori">Numero di Giocatori</label>
                        <select
                            id="numeroGiocatori"
                            name="numeroGiocatori"
                            value={formData.numeroGiocatori}
                            onChange={handleChange}
                        >
                            <option value="10">5 vs 5 (10 giocatori)</option>
                            <option value="12">6 vs 6 (12 giocatori)</option>
                            <option value="14">7 vs 7 (14 giocatori)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="costo">Costo a Persona (€)</label>
                        <input
                            type="number"
                            id="costo"
                            name="costo"
                            min="0"
                            step="0.5"
                            value={formData.costo}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="note">Note</label>
                    <textarea
                        id="note"
                        name="note"
                        placeholder="Informazioni aggiuntive..."
                        value={formData.note}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn btn-outline" onClick={() => navigate('/partite')}>
                        Annulla
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Crea Partita
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreaPartita;