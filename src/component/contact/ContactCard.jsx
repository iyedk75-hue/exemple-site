export default function ContactCard({ icon, title, content, showButton }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-rose-500 mb-3">{title}</h3>
      <p className="text-gray-600 whitespace-pre-line">{content}</p>
      {showButton && (
        <a 
          href="tel:+216XXXXXXXX" 
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full text-sm font-bold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          Appeler maintenant
        </a>
      )}
    </div>
  );
}