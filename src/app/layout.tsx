import React from 'react';
import './globals.css';
import { NotesProvider } from './context/NotesContext';

export const metadata = {
  title: 'Notes App',
  description: 'A simple app to manage your notes.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
