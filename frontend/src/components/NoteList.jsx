import React from 'react';

const ListeNotes = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="w-full flex gap-5 max-w-6xl mx-auto mt-8 max-h-[20rem] overflow-auto">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">Aucune note disponible</p>
      ) : (
        <>
          {notes.map((note) => (
            <div key={note._id} className="p-4 bg-white shadow-lg rounded-md w-xs">
              <h3 className="text-xl font-semibold">{note.title}</h3>
              <p className="text-gray-600">{note.description}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => onEdit(note)}
                  className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(note._id)}
                  className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListeNotes;
