import ContactCard from './ContactCard';
import { contactData } from '../../data/contactData';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-rose-500 mb-8 md:mb-12">Contactez-Nous</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {contactData.map((item, index) => (
          <ContactCard 
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            showButton={item.showButton}
          />
        ))}
      </div>
    </section>
  );
}