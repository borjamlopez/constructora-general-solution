import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import logo from '../assets/logo-light.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Quiénes Somos', path: '/quienes-somos' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'Equipos Pesados', path: '/equipos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Constructora General Solution" className="nav-logo" />
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions desktop-only">
                    <a href="https://www.instagram.com/constructorageneralsolution/" target="_blank" rel="noreferrer" className="social-link">
                        <Instagram size={20} />
                    </a>
                    <Link to="/contacto" className="btn btn-primary btn-sm">
                        Cotizar
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="mobile-socials">
                        <a href="https://www.instagram.com/constructorageneralsolution/" target="_blank" rel="noreferrer">
                            <Instagram size={24} />
                        </a>
                    </li>
                    <li>
                        <Link to="/contacto" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Cotizar Proyecto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
