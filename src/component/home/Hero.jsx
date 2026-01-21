export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-pink-100 to-rose-50 mt-16 px-4 py-12 md:py-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-500 mb-4 md:mb-6 drop-shadow-md leading-tight">
          Révélez Votre Beauté Naturelle
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
          Institut d'esthétique et de bien-être à Tunis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+216XXXXXXXX" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            📞 Appelez-nous
          </a>
          <a 
            href="#services" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-rose-500 border-2 border-rose-500 rounded-full font-bold hover:bg-rose-50 transition-all duration-300 text-sm sm:text-base"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}