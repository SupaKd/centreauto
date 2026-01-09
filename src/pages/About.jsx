import { motion } from 'framer-motion';

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">À propos</h1>
            <p className="page-subtitle">
              Votre partenaire automobile de confiance depuis des années
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Notre histoire</h2>
            <p className="about-text">
              Centre Auto Services est un garage automobile indépendant situé à
              Oyonnax, au service des automobilistes depuis de nombreuses années.
              Notre équipe de mécaniciens qualifiés met son expertise au service
              de votre véhicule, quelle que soit la marque.
            </p>
            <p className="about-text">
              Nous nous engageons à fournir un service de qualité avec des prix
              transparents et des conseils personnalisés pour chaque client.
            </p>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nos valeurs</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Expertise</h3>
                <p>
                  Des mécaniciens qualifiés et en formation continue pour
                  maîtriser les dernières technologies automobiles.
                </p>
              </div>
              <div className="value-item">
                <h3>Transparence</h3>
                <p>
                  Des devis détaillés et expliqués, sans surprise sur la
                  facture finale.
                </p>
              </div>
              <div className="value-item">
                <h3>Qualité</h3>
                <p>
                  Utilisation de pièces de qualité et respect des normes
                  constructeurs.
                </p>
              </div>
              <div className="value-item">
                <h3>Proximité</h3>
                <p>
                  Un service personnalisé et à l'écoute de vos besoins
                  spécifiques.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-equipment"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Notre équipement</h2>
            <p className="about-text">
              Notre atelier est équipé des derniers outils de diagnostic et de
              réparation pour intervenir efficacement sur tous types de
              véhicules : voitures essence, diesel, hybrides.
            </p>
            <ul className="equipment-list">
              <li>Valise de diagnostic multimarques</li>
              <li>Pont élévateur 4 colonnes</li>
              <li>Station de climatisation</li>
              <li>Banc de géométrie</li>
              <li>Équilibreuse de roues</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;