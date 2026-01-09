import { motion } from 'framer-motion';

function Legal() {
  return (
    <div className="legal-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Mentions Légales</h1>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="legal-section">
              <h2>Éditeur du site</h2>
              <p>
                Centre Auto Services
                <br />
                [Adresse complète]
                <br />
                01170 Oyonnax
                <br />
                France
              </p>
              <p>
                Téléphone : 04 50 41 XX XX
                <br />
                Email : contact@centreauto.fr
              </p>
              <p>
                SIRET : [Numéro SIRET]
                <br />
                TVA intracommunautaire : [Numéro TVA]
              </p>
            </div>

            <div className="legal-section">
              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par :
                <br />
                [Nom de l'hébergeur]
                <br />
                [Adresse de l'hébergeur]
              </p>
            </div>

            <div className="legal-section">
              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos) est la
                propriété de Centre Auto Services ou fait l'objet d'une
                autorisation d'utilisation. Toute reproduction, totale ou
                partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div className="legal-section">
              <h2>Données personnelles</h2>
              <p>
                Conformément à la loi « Informatique et Libertés » et au RGPD,
                vous disposez d'un droit d'accès, de modification, de
                rectification et de suppression des données vous concernant.
              </p>
              <p>
                Pour exercer ce droit, contactez-nous à :
                contact@centreauto.fr
              </p>
              <p>
                Les informations recueillies via le formulaire de contact sont
                destinées uniquement à Centre Auto Services et ne sont pas
                transmises à des tiers.
              </p>
            </div>

            <div className="legal-section">
              <h2>Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience
                utilisateur et mesurer l'audience. En poursuivant votre
                navigation, vous acceptez l'utilisation de ces cookies.
              </p>
            </div>

            <div className="legal-section">
              <h2>Crédits</h2>
              <p>
                Conception et développement : [Votre nom/entreprise]
                <br />
                Photos : [Source des photos]
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Legal;