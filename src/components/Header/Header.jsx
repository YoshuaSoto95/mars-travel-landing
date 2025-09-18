import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css'; // Estilos para el Header

const Header = ({ openModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Variantes para Framer Motion
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.header
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
            <div className="container header-content">
                <div className="logo">
                    <a href="/">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            MarsVoyageX
                        </motion.h1>
                    </a>
                </div>

                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <motion.ul variants={menuVariants} initial="hidden" animate="visible">
                        <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu}>About</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#benefits" onClick={toggleMenu}>Beneficios</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#plans" onClick={toggleMenu}>Planes</a></motion.li>
                        <motion.li variants={itemVariants}><a href="#testimonials" onClick={toggleMenu}>Comentarios</a></motion.li>
                        <motion.li variants={itemVariants} className="nav-cta-item">
                            <button className="cta-button" onClick={() => { openModal(); toggleMenu(); }}>
                                Precalifica tu viaje
                            </button>
                        </motion.li>
                    </motion.ul>
                </nav>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;