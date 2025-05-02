import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    { id: 1, title: 'Web Design', description: 'Professional UI/UX' },
    { id: 2, title: 'App Development', description: 'Cross-platform apps' },
    { id: 3, title: 'SEO Optimization', description: 'Boost your site visibility' },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
