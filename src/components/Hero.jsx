import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">
            Centre Auto Services
          </h1>
          <p className="hero__subtitle">
            Votre garage de confiance à Oyonnax
          </p>
          <div className="hero__buttons">
            <Link to="/contact" className="btn btn--primary">
              Prendre rendez-vous
            </Link>
            <Link to="/services" className="btn btn--secondary">
              Nos services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;