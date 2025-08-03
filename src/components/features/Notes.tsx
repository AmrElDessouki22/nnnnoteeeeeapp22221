'use client';

import { useNotes } from '../../contexts/NotesContext';
import Note from './Note';
import Button from '../ui/Button';

export default function Notes() {
  const { notes, addNote } = useNotes();

  return (
    <div>
      <Button onClick={addNote}>Add Note</Button>
      <div className="mt-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
