import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" style={{ background: 'transparent' }}>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-text text-center"
                >
                    <h1 className="hero-title">
                        Expertos en <span className="text-primary" style={{ whiteSpace: 'nowrap' }}>Ingeniería Vial</span><br />
                        y Obras Civiles
                    </h1>
                    <p className="hero-subtitle mx-auto">
                        Solidez técnica. Compromiso absoluto. <br />
                        República Dominicana.
                    </p>
                    <div className="hero-btns center-flex">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                        >
                            Cotiza Hoy <ArrowRight className="btn-icon" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline"
                        >
                            Ver Proyectos
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hero-scroll-indicator"
            >
                <div className="mouse-wheel"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
