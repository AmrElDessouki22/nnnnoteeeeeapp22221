'use client';

import React from 'react';
import { Note as NoteType } from '../../types';

interface NoteProps {
  note: NoteType;
}

export default function Note({ note }: NoteProps) {
  return (
    <div className="border p-2 rounded mb-2">
      <h2 className="font-bold">{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
