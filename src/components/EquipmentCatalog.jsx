import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pavingImg from '../assets/road-paving.png';

const EquipmentCatalog = () => {
    const [filter, setFilter] = useState('Todos');

    const equipments = [
        { id: 1, name: "Pavimentadora de Asfalto", type: "Vial", cap: "10 ton", model: "Día / Hora" },
        { id: 2, name: "Rodillo Compactador", type: "Vial", cap: "12 ton", model: "Día / Hora" },
        { id: 3, name: "Excavadora Hidráulica", type: "Pesado", cap: "20 ton", model: "Día / Hora" },
        { id: 4, name: "Motoniveladora", type: "Vial", cap: "High Performance", model: "Día / Hora" },
        { id: 5, name: "Camión Volteo", type: "Transporte", cap: "15 m³", model: "Viaje" },
        { id: 6, name: "Retroexcavadora", type: "Pesado", cap: "Standard", model: "Día / Hora" },
    ];

    const categories = ['Todos', 'Vial', 'Pesado', 'Transporte'];

    const filteredItems = filter === 'Todos' ? equipments : equipments.filter(e => e.type === filter);

    return (
        <section className="section bg-surface" id="equipment">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Logística Pesada</span>
                    <h2 className="section-title">Flota de <span className="text-primary">Equipos Disponibles</span></h2>
                    <p className="section-description">Maquinaria de última generación para garantizar la eficiencia y rapidez en su obra.</p>
                </motion.div>

                <div className="catalog-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="catalog-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((e) => (
                            <motion.div
                                key={e.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="equipment-card"
                            >
                                <div className="eq-image">
                                    <img src={pavingImg} alt={e.name} />
                                </div>
                                <div className="eq-info">
                                    <div className="eq-type">{e.type}</div>
                                    <h3>{e.name}</h3>
                                    <div className="eq-specs">
                                        <span><strong>Capacidad:</strong> {e.cap}</span>
                                        <span><strong>Modalidad:</strong> {e.model}</span>
                                    </div>
                                    <button className="btn btn-outline btn-sm btn-full">Consultar Disponibilidad</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default EquipmentCatalog;
