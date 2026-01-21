
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Hero from './component/home/Hero';
import Services from './component/services/Services';
import About from './component/about/About';
import Contact from './component/contact/Contact';

export default function App() {
  return (
    <div className="font-serif">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}