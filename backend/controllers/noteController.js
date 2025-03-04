const Note = require('../models/Note');

// Récupérer toutes les notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer une nouvelle note
exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  const nouvelleNote = new Note({ title, description });

  try {
    await nouvelleNote.save();
    res.status(201).json(nouvelleNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour une note existante
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const note = await Note.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!note) return res.status(404).json({ message: "Note non trouvée" });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer une note
exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ message: "Note non trouvée" });
    res.status(200).json({ message: "Note supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
