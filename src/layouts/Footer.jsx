import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Centre Auto Services</h3>
            <p className="footer__text">
              Votre garage de confiance à Oyonnax pour l'entretien et la réparation
              de votre véhicule.
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Liens rapides</h3>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer__link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="footer__link">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Horaires</h3>
            <p className="footer__text">
              Lundi - Vendredi: 8h00 - 18h00
              <br />
              Samedi: 8h00 - 12h00
              <br />
              Dimanche: Fermé
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <p className="footer__text">
              Téléphone: 04 50 41 XX XX
              <br />
              Email: contact@centreauto.fr
              <br />
              Adresse: Oyonnax, France
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Centre Auto Services. Tous droits réservés.
          </p>
          <Link to="/mentions-legales" className="footer__legal">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;