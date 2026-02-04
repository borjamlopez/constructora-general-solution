import React from 'react';
import { motion } from 'framer-motion';
import {
    DraftingCompass, Droplets, Zap,
    Map, Shovel, Layers, Truck, Building2
} from 'lucide-react';

const ServicesSection = () => {
    const designServices = [
        { icon: <DraftingCompass />, title: "Arquitectura" },
        { icon: <Zap />, title: "Electricidad" },
        { icon: <Droplets />, title: "Sanitarios" },
        { icon: <Building2 />, title: "Estructuras" },
        { icon: <Map />, title: "Vialidad" },
        { icon: <Layers />, title: "Terminaciones" },
    ];

    const civilServices = [
        { title: "Movimiento de Tierra", icon: <Shovel /> },
        { title: "Pavimentación", icon: <Layers /> },
        { title: "Asfalto", icon: <Truck /> },
        { title: "Impermeabilización", icon: <Droplets /> },
        { title: "Electromecánica", icon: <Zap /> },
        { title: "Señalización", icon: <Map /> },
    ];

    return (
        <section className="section bg-dark" id="services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-80"
                >
                    <span className="section-tag center">Especialidades</span>
                    <h2 className="section-title">Ingeniería de <span className="text-primary">Clase Mundial</span></h2>
                </motion.div>

                <div className="services-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="service-group-minimal"
                    >
                        <h3 className="group-title">Consultoría y Diseño</h3>
                        <div className="services-grid-minimal">
                            {designServices.map((s, i) => (
                                <div key={i} className="service-item-minimal">
                                    <div className="service-icon-sm">{s.icon}</div>
                                    <span>{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="service-group-minimal"
                    >
                        <h3 className="group-title">Ejecución de Obras</h3>
                        <div className="services-grid-minimal">
                            {civilServices.map((s, i) => (
                                <div key={i} className="service-item-minimal">
                                    <div className="service-icon-sm">{s.icon}</div>
                                    <span>{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
