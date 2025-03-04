import React, { useState, useEffect } from 'react';

const FormulaireNote = ({ note, onSave }) => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (note) {
      setTitre(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title: titre, description });
    setTitre('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Titre</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        {note ? 'Mettre à jour la note' : 'Ajouter une note'}
      </button>
    </form>
  );
};

export default FormulaireNote;
