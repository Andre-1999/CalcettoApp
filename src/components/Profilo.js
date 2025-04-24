import React, { useState, useEffect } from 'react';

const Profilo = ({ userPhoto, handlePhotoUpload }) => {
  const [statistiche, setStatistiche] = useState({
    partiteGiocate: 0,
    mvpVinti: 0,
    gol: 0,
    assist: 0,
    mediaGol: 0,
  });

  useEffect(() => {
    const datiUtente = {
      partiteGiocate: 120,
      mvpVinti: 15,
      gol: 45,
      assist: 30,
      mediaGol: 0.375,
    };

    setStatistiche(datiUtente);
  }, []);

  // Immagine di placeholder
  const placeholderImage = 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png';

  return (
    <div style={styles.container}>
      <h1 style={styles.titolo}>Mario Rossi</h1>

      {/* Visualizza la foto dell'utente o il placeholder */}
      <div style={styles.photoContainer}>
        <img
          src={userPhoto || placeholderImage} // Se l'utente non ha una foto, mostra il placeholder
          alt="Foto utente"
          style={styles.photo}
        />
      </div>

      {/* Input per caricare una nuova foto */}
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        style={styles.fileInput}
      />
      
      <p style={styles.testo}>Partite Giocate: {statistiche.partiteGiocate}</p>
      <p style={styles.testo}>MVP Vinti: {statistiche.mvpVinti}</p>
      <p style={styles.testo}>Gol: {statistiche.gol}</p>
      <p style={styles.testo}>Assist: {statistiche.assist}</p>
      <p style={styles.testo}>Media Gol/Partita: {statistiche.mediaGol}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  titolo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  testo: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  photoContainer: {
    marginTop: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  fileInput: {
    marginTop: '20px',
    padding: '5px',
  },
};

export default Profilo;
