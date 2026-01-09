import { motion } from 'framer-motion';

function ServiceCard({ service, index }) {
  const IconComponent = service.icon;

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="service-card__icon">
        <IconComponent size={48} strokeWidth={1.5} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
    </motion.div>
  );
}

export default ServiceCard;