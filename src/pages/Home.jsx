import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Settings, Car, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

function Home() {
  const services = [
    {
      id: 1,
      title: 'Entretien courant',
      description: 'Vidange, freinage, pneus, climatisation',
      icon: Wrench,
    },
    {
      id: 2,
      title: 'Mécanique générale',
      description: 'Diagnostic et réparation toutes marques',
      icon: Settings,
    },
    {
      id: 3,
      title: 'Pneumatiques',
      description: 'Montage, équilibrage, géométrie',
      icon: Car,
    },
    {
      id: 4,
      title: 'Contrôle technique',
      description: 'Préparation et contre-visite',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="home">
      <Hero />

      <section className="home__services">
        <div className="container">
          <motion.div
            className="home__services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Un service de qualité pour votre véhicule
            </p>
          </motion.div>

          <div className="home__services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="home__services-cta">
            <Link to="/services" className="btn btn--primary">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      <section className="home__about">
        <div className="container">
          <motion.div
            className="home__about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <div className="home__about-features">
              <div className="feature">
                <h3>Expertise</h3>
                <p>Des professionnels qualifiés et expérimentés</p>
              </div>
              <div className="feature">
                <h3>Équipement moderne</h3>
                <p>Des outils et équipements de dernière génération</p>
              </div>
              <div className="feature">
                <h3>Prix transparents</h3>
                <p>Devis gratuit et détaillé avant intervention</p>
              </div>
            </div>
            <Link to="/a-propos" className="btn btn--secondary">
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home__cta">
        <div className="container">
          <motion.div
            className="home__cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Besoin d'un rendez-vous ?</h2>
            <p>Contactez-nous dès maintenant</p>
            <Link to="/contact" className="btn btn--primary">
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;