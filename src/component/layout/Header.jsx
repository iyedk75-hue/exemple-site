export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold tracking-wider">✨ Beauté Divine</div>
        <ul className="flex gap-8">
          <li><a href="#accueil" className="hover:opacity-80 transition-opacity">Accueil</a></li>
          <li><a href="#services" className="hover:opacity-80 transition-opacity">Services</a></li>
          <li><a href="#apropos" className="hover:opacity-80 transition-opacity">À propos</a></li>
          <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}