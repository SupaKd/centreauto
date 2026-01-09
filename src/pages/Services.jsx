import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function Services() {
  const servicesData = [
    {
      id: 1,
      category: 'Entretien courant',
      services: [
        'Vidange moteur',
        'Changement de filtres (huile, air, habitacle)',
        'Contrôle des niveaux',
        'Révision complète selon préconisations constructeur',
      ],
    },
    {
      id: 2,
      category: 'Freinage',
      services: [
        'Remplacement plaquettes et disques',
        'Changement de liquide de frein',
        'Contrôle du système de freinage',
        'Réparation étriers et flexibles',
      ],
    },
    {
      id: 3,
      category: 'Pneumatiques',
      services: [
        'Montage et démontage',
        'Équilibrage',
        'Permutation',
        'Géométrie et parallélisme',
        'Réparation crevaison',
      ],
    },
    {
      id: 4,
      category: 'Climatisation',
      services: [
        'Recharge climatisation',
        'Diagnostic et réparation',
        'Désinfection du circuit',
        'Changement de filtre habitacle',
      ],
    },
    {
      id: 5,
      category: 'Mécanique générale',
      services: [
        'Diagnostic électronique',
        'Distribution (courroie, chaîne)',
        'Embrayage',
        'Suspension et amortisseurs',
        'Échappement',
        'Batterie et alternateur',
      ],
    },
    {
      id: 6,
      category: 'Contrôle technique',
      services: [
        'Préparation au contrôle',
        'Contre-visite',
        'Réparation des points de contrôle',
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Nos Services</h1>
            <p className="page-subtitle">
              Des prestations complètes pour l'entretien et la réparation de
              votre véhicule
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((category, index) => (
              <motion.div
                key={category.id}
                className="service-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="service-category__title">{category.category}</h2>
                <ul className="service-category__list">
                  {category.services.map((service, i) => (
                    <li key={i} className="service-category__item">
                      <span className="service-category__bullet">
                        <ChevronRight size={20} />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <motion.div
            className="services-cta__content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Un service manquant ?</h2>
            <p>N'hésitez pas à nous contacter pour toute demande spécifique</p>
            <a href="tel:0450411111" className="btn btn--primary">
              04 50 41 XX XX
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;