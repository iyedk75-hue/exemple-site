export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center">
      <div className="text-4xl sm:text-5xl mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-rose-500 mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}