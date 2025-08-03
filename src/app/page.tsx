import React from 'react';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Notes</h1>
      <NewNoteForm />
      <NotesList />
    </div>
  );
};

export default HomePage;
