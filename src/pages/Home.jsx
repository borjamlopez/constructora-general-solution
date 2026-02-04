import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import EquipmentCatalog from '../components/EquipmentCatalog';
import ClientsSection from '../components/ClientsSection';
import ContactForm from '../components/ContactForm';
import ParallaxSection from '../components/ParallaxSection';
import ScrollingBackground from '../components/ScrollingBackground';

// Extra Images for Parallax
import roadImg from '../assets/road-paving.png';
import machineImg from '../assets/excavator-site.png';
import engineerImg from '../assets/engineering.png';

const Home = () => {
    return (
        <main className="home-page">
            <ScrollingBackground />
            <Hero />
            <AboutSection />

            <div className="content-spacer">
                <h2 className="massive-title">Calidad que Perdura</h2>
            </div>

            <ServicesSection />

            <div className="content-spacer">
                <h2 className="massive-title">Precisión Técnica</h2>
            </div>

            <ProjectsSection />

            <div className="content-spacer">
                <h2 className="massive-title">Potencia Operativa</h2>
            </div>

            <EquipmentCatalog />
            <ClientsSection />
            <ContactForm />
        </main>
    );
};

export default Home;
