// src/data/matchHistory.js

/**
 * Storico delle partite (mock data).
 * Ogni oggetto contiene: id, date, fieldName, street, teamA, teamB, mvp, scoreA, scoreB
 */
const matchHistory = [
    {
      id: 1,
      date: '2025-04-20',
      fieldName: 'Campo Centrale',
      street: 'Via Roma, 10',
      teamA: { players: ['Marco Rossi', 'Luca Bianchi'] },
      teamB: { players: ['Andrea Verdi', 'Simone Neri'] },
      mvp: 'Marco Rossi',
      scoreA: 3,
      scoreB: 2
    },
    {
      id: 2,
      date: '2025-04-18',
      fieldName: 'Campo Comunale',
      street: 'Piazza Italia, 5',
      teamA: { players: ['Giulia Russo', 'Sara Conte'] },
      teamB: { players: ['Elena Ferri', 'Laura Galli'] },
      mvp: 'Elena Ferri',
      scoreA: 1,
      scoreB: 1
    },
    {
      id: 3,
      date: '2025-04-22',
      fieldName: 'Campetto Verde',
      street: 'Via dei Fiori, 12',
      teamA: { players: ['Alice', 'Bob'] },
      teamB: { players: ['Charlie', 'Dave'] },
      mvp: 'Alice',
      scoreA: 2,
      scoreB: 3
    }
    // Aggiungi qui altre partite
  ];
  
  export default matchHistory;
  