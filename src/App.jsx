
import { useState } from 'react';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Sidebar from './component/layout/Sidebar';
import Hero from './component/home/Hero';
import Services from './component/services/Services';
import About from './component/about/About';
import Contact from './component/contact/Contact';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="font-serif">
      <Header />
      
      {/* Bouton pour ouvrir le menu mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-20 left-4 z-50 lg:hidden bg-gradient-to-r from-pink-400 to-rose-500 text-white p-3 rounded-full shadow-lg"
      >
        ☰
      </button>

      {/* Layout avec Sidebar */}
      <div className="flex pt-20">
        {/* Sidebar - desktop */}
        <aside className="hidden lg:block fixed left-0 top-16 h-screen">
          <Sidebar />
        </aside>

        {/* Sidebar - mobile */}
        {isSidebarOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-0 h-screen z-50 lg:hidden">
              <Sidebar />
            </aside>
          </>
        )}

        {/* Contenu principal */}
        <main className="flex-1 lg:ml-64">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}