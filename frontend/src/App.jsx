import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Fetch all notes
  useEffect(() => {
    fetchNotes();
  }, []);

  // 
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get('/api/notes');
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Add or Update a note
  const handleSaveNote = async (note) => {
    try {
      if (selectedNote) {
        // Update existing note
        const { data } = await axios.put(`/api/notes/${selectedNote._id}`, note);
        setNotes(notes.map((n) => (n._id === data._id ? data : n)));
      } else {
        // Add new note
        const { data } = await axios.post('/api/notes', note);
        setNotes([...notes, data]);
      }
      setSelectedNote(null);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  // Delete a note
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Edit a note
  const handleEditNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 my-2">QuickNotes</h1>

        <NoteForm note={selectedNote} onSave={handleSaveNote} />

        <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
      </div>
    </div>
  );
};

export default App;
