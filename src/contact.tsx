import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './index.css';

export function ContactApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);