import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-modern-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-visual-info"
                    >
                        <div className="contact-header">
                            <span className="section-tag">Contacto</span>
                            <h2 className="section-title">Hagamos realidad su <span className="text-primary">visión</span></h2>
                            <p className="contact-subtitle">
                                Estamos listos para liderar proyectos de alta complejidad técnica con la solidez que nos caracteriza.
                            </p>
                        </div>

                        <div className="contact-cards-container">
                            <motion.div whileHover={{ y: -5 }} className="contact-card-minimal">
                                <div className="contact-card-icon"><Phone size={20} /></div>
                                <div className="contact-card-content">
                                    <span className="card-label">Teléfono Emergencias</span>
                                    <span className="card-value">+1 (809) 000-0000</span>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="contact-card-minimal">
                                <div className="contact-card-icon"><Mail size={20} /></div>
                                <div className="contact-card-content">
                                    <span className="card-label">Email Corporativo</span>
                                    <span className="card-value">info@gsc.com.do</span>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="contact-card-minimal">
                                <div className="contact-card-icon"><MapPin size={20} /></div>
                                <div className="contact-card-content">
                                    <span className="card-label">Sede Central</span>
                                    <span className="card-value">Santo Domingo, RD</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="form-wrapper-modern"
                    >
                        <form className="modern-glass-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-header-minimal">
                                <h3>Solicitar Cotización</h3>
                                <p>Complete el formulario y un especialista lo contactará en menos de 24 horas.</p>
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group-modern">
                                    <input type="text" placeholder=" " id="nombre" required />
                                    <label htmlFor="nombre">Nombre Completo</label>
                                </div>
                                <div className="form-group-modern">
                                    <input type="email" placeholder=" " id="email" required />
                                    <label htmlFor="email">Email de Contacto</label>
                                </div>
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group-modern">
                                    <input type="text" placeholder=" " id="empresa" />
                                    <label htmlFor="empresa">Empresa / Institución</label>
                                </div>
                                <div className="form-group-modern">
                                    <select id="servicio" required>
                                        <option value="" hidden disabled selected></option>
                                        <option value="pavimentacion">Pavimentación</option>
                                        <option value="civil">Obras Civiles</option>
                                        <option value="alquiler">Alquiler de Equipos</option>
                                        <option value="diseno">Diseño Vial</option>
                                    </select>
                                    <label htmlFor="servicio">Servicio de Interés</label>
                                </div>
                            </div>

                            <div className="form-group-modern">
                                <textarea placeholder=" " id="mensaje" rows="4" required></textarea>
                                <label htmlFor="mensaje">Descripción del requerimiento...</label>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn-modern-submit"
                            >
                                <span>Enviar Solicitud</span>
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
