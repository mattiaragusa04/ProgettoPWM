const express = require('express');
const cors = require('cors');
const db = require('./db/database.js');
const app = express();

const PORT = 3000;

app.use(cors());
app.use (express.json());

app.get('/', (req, res) => {
    res.send('Server attivo');
});

// Rotta API temporanea per vedere tutti gli utenti registrati
app.get('/api/utenti', (req, res) => {
    db.all(`SELECT * FROM utente`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ utenti: rows });
    });
});

// Rotta API per la registrazione
app.post('/api/register', (req, res) => {
    // Estraiamo i dati dal corpo della richiesta
    const { nome, cognome, email, password } = req.body;

    // Query per inserire l'utente nel database
    const sql = `INSERT INTO utente (nome, cognome, email, password) VALUES (?, ?, ?, ?)`;
    
    // Usiamo db.run per eseguire l'inserimento
    db.run(sql, [nome, cognome, email, password], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: "Errore durante la registrazione." });
        }
        // this.lastID contiene l'ID generato automaticamente per questo nuovo utente
        res.status(201).json({ message: "Registrazione completata!", utenteId: this.lastID });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});