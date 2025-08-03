'use client';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Notes from '../components/features/Notes';

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <Notes />
      </main>
      <Footer />
    </div>
  );
}
