import ContactCard from './ContactCard';
import { contactData } from '../../data/contactData';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-rose-500 mb-12">Contactez-Nous</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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