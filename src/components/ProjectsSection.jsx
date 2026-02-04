import React from 'react';
import { motion } from 'framer-motion';
import pavingImg from '../assets/road-paving.png';
import excavatorImg from '../assets/excavator-site.png';
import engineeringImg from '../assets/engineering.png';

const ProjectsSection = () => {
    const projects = [
        { title: "Parqueo Supermercado Bravo", type: "Pavimentación", loc: "S.D.", size: "5,000 m²", img: pavingImg },
        { title: "Metro Plaza", type: "Obras Civiles", loc: "S.D.", size: "2,500 m²", img: excavatorImg },
        { title: "Residencial Don Marcelo", type: "Construcción", loc: "Samaná", size: "12,000 m²", img: engineeringImg },
        { title: "Parque Mirador Sur", type: "Señalización", loc: "D.N.", size: "15 km", img: pavingImg },
        { title: "Banco de Reservas", type: "Remodelación", loc: "Nacional", size: "N/A", img: excavatorImg },
        { title: "S. de Bancos", type: "Mantenimiento", loc: "S.D.", size: "N/A", img: engineeringImg },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="section bg-black" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Nuestra Huella</span>
                    <h2 className="section-title">Portafolio de <span className="text-primary">Excelencia Técnica</span></h2>
                    <p className="section-description">Obras de infraestructura que definen el paisaje urbano y vial de la nación.</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="projects-grid"
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={p.img} alt={p.title} />
                                <div className="project-category">{p.type}</div>
                            </div>
                            <div className="project-info">
                                <h4>{p.title}</h4>
                                <div className="project-details">
                                    <span>{p.loc}</span>
                                    {p.size !== "N/A" && <span className="project-size">{p.size}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
