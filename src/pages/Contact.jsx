import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuration EmailJS (à remplacer par tes propres IDs)
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">
              Besoin d'un renseignement ou d'un rendez-vous ? Contactez-nous !
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Nos coordonnées</h2>
              
              <div className="contact-item">
                <h3>Téléphone</h3>
                <a href="tel:0450411111" className="contact-link">
                  04 50 41 XX XX
                </a>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:contact@centreauto.fr" className="contact-link">
                  contact@centreauto.fr
                </a>
              </div>

              <div className="contact-item">
                <h3>Adresse</h3>
                <p>
                  Centre Auto Services
                  <br />
                  [Adresse complète]
                  <br />
                  01170 Oyonnax
                </p>
              </div>

              <div className="contact-item">
                <h3>Horaires d'ouverture</h3>
                <p>
                  Lundi - Vendredi: 8h00 - 18h00
                  <br />
                  Samedi: 8h00 - 12h00
                  <br />
                  Dimanche: Fermé
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Envoyez-nous un message</h2>
              
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', {
                      required: 'Le nom est requis',
                      minLength: {
                        value: 2,
                        message: 'Le nom doit contenir au moins 2 caractères',
                      },
                    })}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalide',
                      },
                    })}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      pattern: {
                        value: /^[0-9\s\-\+\(\)]+$/,
                        message: 'Numéro de téléphone invalide',
                      },
                    })}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', {
                      required: 'Le message est requis',
                      minLength: {
                        value: 10,
                        message: 'Le message doit contenir au moins 10 caractères',
                      },
                    })}
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message form-message--success">
                    Message envoyé avec succès ! Nous vous répondrons rapidement.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message form-message--error">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter
                    par téléphone.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <h2 className="section-title">Notre localisation</h2>
          <div className="map-wrapper">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.247408502814!2d5.641720315608857!3d46.24461064109145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478cbd00147332c3%3A0x8244b2e6ea2d5eff!2sCentre%20Auto%20Services!5e0!3m2!1sfr!2sfr!4v1704800000000"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Localisation Centre Auto Services"
/>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;