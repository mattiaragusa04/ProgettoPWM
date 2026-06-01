const express = require('express');
const cors = require('cors');
const db = require('./db/database');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
// app.use(cors());

app.use(cors({
  origin: "*", 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Permette al server di leggere dati in formato JSON

// Routes
app.use('/api/auth', authRoutes);

// Rotta di prova
app.get('/', (req, res) => {
    res.send('Il server è attivo e funzionante!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`));