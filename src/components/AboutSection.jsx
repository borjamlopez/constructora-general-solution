import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users } from 'lucide-react';

const AboutSection = () => {
    const values = [
        { icon: <Shield size={32} />, title: "Seguridad", text: "Protocolos estrictos." },
        { icon: <Award size={32} />, title: "Calidad", text: "Excelencia técnica." },
        { icon: <Target size={32} />, title: "Integridad", text: "Transparencia total." },
        { icon: <Users size={32} />, title: "Seriedad", text: "Plazos garantizados." },
    ];

    return (
        <section className="section bg-black" id="about">
            <div className="container">
                <div className="about-grid-simple">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-80"
                    >
                        <span className="section-tag center">Quiénes Somos</span>
                        <h2 className="section-title">Construimos el <span className="text-primary">Futuro del País</span></h2>
                        <p className="section-description mx-auto">
                            Líderes en infraestructura vial con más de 15 años de experiencia transformando el paisaje dominicano.
                        </p>
                    </motion.div>

                    <div className="values-minimal-grid">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="value-card-minimal"
                            >
                                <div className="value-icon">{v.icon}</div>
                                <h4>{v.title}</h4>
                                <p>{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
