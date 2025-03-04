const express = require('express');
const mongoose = require('mongoose');
const routesNotes = require('./routes/noteRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Échec de la connexion à MongoDB :", err));

// Utiliser les routes des notes
app.use('/api/notes', routesNotes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
