import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListeNotes from './components/ListeNotes';
import FormulaireNote from './components/FormulaireNote';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteSelectionnee, setNoteSelectionnee] = useState(null);

  // Récupérer toutes les notes
  useEffect(() => {
    recupererNotes();
  }, []);

  const recupererNotes = async () => {
    try {
      const { data } = await axios.get('/api/notes');
      setNotes(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des notes :', error);
    }
  };

  // Ajouter ou mettre à jour une note
  const handleEnregistrerNote = async (note) => {
    try {
      if (noteSelectionnee) {
        // Mettre à jour une note existante
        const { data } = await axios.put(`/api/notes/${noteSelectionnee._id}`, note);
        setNotes(notes.map((n) => (n._id === data._id ? data : n)));
      } else {
        // Ajouter une nouvelle note
        const { data } = await axios.post('/api/notes', note);
        setNotes([...notes, data]);
      }
      setNoteSelectionnee(null);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la note :', error);
    }
  };

  // Supprimer une note
  const handleSupprimerNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la note :', error);
    }
  };

  // Modifier une note
  const handleModifierNote = (note) => {
    setNoteSelectionnee(note);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 my-2">QuickNotes</h1>

        <FormulaireNote note={noteSelectionnee} onSave={handleEnregistrerNote} />

        <ListeNotes notes={notes} onDelete={handleSupprimerNote} onEdit={handleModifierNote} />
      </div>
    </div>
  );
};

export default App;
