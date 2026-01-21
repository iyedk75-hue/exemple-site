import ServiceCard from './ServiceCard';
import { servicesData } from '../../data/servicesData';

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-rose-500 mb-12">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}