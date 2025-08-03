import React from 'react';
import { useNotes } from '../context/NotesContext';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p>No notes available. Add a new note!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
