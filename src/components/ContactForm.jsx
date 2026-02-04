import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const data = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            empresa: formData.get('empresa'),
            servicio: formData.get('servicio'),
            mensaje: formData.get('mensaje'),
        };

        try {
            const { error } = await supabase
                .from('contact_messages')
                .insert([data]);

            if (error) throw error;

            setStatus('success');
            e.target.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

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
                        <form className="modern-glass-form" onSubmit={handleSubmit}>
                            <div className="form-header-minimal">
                                <h3>Solicitar Cotización</h3>
                                <p>Complete el formulario y un especialista lo contactará en menos de 24 horas.</p>
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group-modern">
                                    <input type="text" name="nombre" placeholder=" " id="nombre" required />
                                    <label htmlFor="nombre">Nombre Completo</label>
                                </div>
                                <div className="form-group-modern">
                                    <input type="email" name="email" placeholder=" " id="email" required />
                                    <label htmlFor="email">Email de Contacto</label>
                                </div>
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group-modern">
                                    <input type="text" name="empresa" placeholder=" " id="empresa" />
                                    <label htmlFor="empresa">Empresa / Institución</label>
                                </div>
                                <div className="form-group-modern">
                                    <select id="servicio" name="servicio" required>
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
                                <textarea name="mensaje" placeholder=" " id="mensaje" rows="4" required></textarea>
                                <label htmlFor="mensaje">Descripción del requerimiento...</label>
                            </div>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="status-message success"
                                    >
                                        <CheckCircle size={20} />
                                        <span>¡Mensaje enviado con éxito!</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="status-message error"
                                    >
                                        <AlertCircle size={20} />
                                        <span>Error al enviar. Intente de nuevo.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className={`btn-modern-submit ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        <span>Enviar Solicitud</span>
                                        <Send size={20} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
