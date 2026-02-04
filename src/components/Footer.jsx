import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo-light.png';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer bg-black">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            src={logo}
                            alt="Constructora Logo"
                            className="footer-logo"
                        />
                        <p className="footer-description">
                            Líderes en diseño, construcción y mantenimiento de obras viales en República Dominicana.
                            Comprometidos con la excelencia técnica y la solidez administrativa.
                        </p>
                        <div className="footer-socials">
                            <motion.a
                                whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                                href="https://www.instagram.com/constructorageneralsolution/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                            >
                                <Instagram size={24} />
                                <span className="social-text">Instagram</span>
                            </motion.a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h4>Explorar</h4>
                        <ul className="footer-list">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/quienes-somos">Quiénes Somos</a></li>
                            <li><a href="/servicios">Servicios</a></li>
                            <li><a href="/proyectos">Proyectos</a></li>
                            <li><a href="/equipos">Equipos</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <ul className="footer-list">
                            <li>
                                <Mail size={18} className="text-primary" />
                                <span>info@gsc.com.do</span>
                            </li>
                            <li>
                                <Phone size={18} className="text-primary" />
                                <span>+1 (809) 000-0000</span>
                            </li>
                            <li>
                                <MapPin size={18} className="text-primary" />
                                <span>Santo Domingo, RD</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Newsletter</h4>
                        <p>Manténgase al tanto de nuestras últimas innovaciones en infraestructura.</p>
                        <form className="newsletter-form-modern" onClick={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Su correo electrónico" />
                            <button type="submit" className="btn-newsletter">
                                Unirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom-modern">
                    <div className="footer-info">
                        <p>&copy; {new Date().getFullYear()} Constructora General Solution. Todos los derechos reservados.</p>
                    </div>
                    <div className="footer-actions">
                        <motion.button
                            whileHover={{ y: -5 }}
                            onClick={scrollToTop}
                            className="scroll-top-modern"
                        >
                            <span>Subir</span>
                            <ArrowUp size={16} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
