export default function Hero() {
  return (
    <section id="accueil" className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-pink-100 to-rose-50 mt-16">
      <div>
        <h1 className="text-6xl font-bold text-rose-500 mb-4 drop-shadow-md">
          Révélez Votre Beauté Naturelle
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Institut d'esthétique et de bien-être à Tunis
        </p>
        <a 
          href="tel:+216XXXXXXXX" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          📞 Appelez-nous
        </a>
      </div>
    </section>
  );
}