import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        "Banreservas", "AES Dominicana", "Metro Plaza",
        "Supermercados Bravo", "Constructora Bisonó", "Ingeniería Estrella",
        "Superintendencia de Bancos", "Residencial Don Marcelo", "Parque Mirador Sur"
    ];

    return (
        <section className="section bg-black" id="clients">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <span className="section-tag center">Nuestros Clientes</span>
                    <h2 className="section-title">Instituciones que <span className="text-primary">Confían en Nosotros</span></h2>
                </motion.div>

                <div className="clients-grid-modern">
                    {clients.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="client-logo-card"
                        >
                            <span className="client-name-stylized">{c}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
