import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Sidebar from './component/layout/Sidebar';
import Hero from './component/home/Hero';
import Services from './component/services/Services';
import About from './component/about/About';
import Contact from './component/contact/Contact';

export default function App() {
  return (
    <div className="font-serif">
      <Header />

      {/* Layout avec Sidebar */}
      <div className="flex pt-20">
        {/* Sidebar - desktop uniquement */}
        <aside className="hidden lg:block fixed left-0 top-16 h-screen">
          <Sidebar />
        </aside>

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