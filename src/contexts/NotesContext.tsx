'use client';

import React, { createContext, useContext, useState } from 'react';
import { Note } from '../types';

interface NotesContextType {
  notes: Note[];
  addNote: () => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    const newNote: Note = {
      id: String(notes.length + 1),
      title: `Note ${notes.length + 1}`,
      content: 'This is a new note.',
    };
    setNotes([...notes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
