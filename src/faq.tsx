import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import './index.css';

export function FAQApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FAQApp />
  </StrictMode>
);