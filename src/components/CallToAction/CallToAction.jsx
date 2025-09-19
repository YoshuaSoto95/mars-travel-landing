import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import marsPlanet from '../../assets/imagen/mars-planet-cta.png'; // Importa tu imagen de Marte
import './CallToAction.css';

const CallToActionSection = ({ openModal }) => {
    const sectionRef = useRef(null);
    const marsRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

    // Efecto para la animación de GSAP del planeta Marte
    useEffect(() => {
        // Animación de rotación lenta y contínua
        gsap.to(marsRef.current, {
            rotation: 360,
            duration: 250, // Duración muy larga para una rotación lenta
            repeat: -1,
            ease: 'none', // Sin aceleración ni desaceleración
        });

        // Animación sutil de "pulso" o "respiración"
        gsap.to(marsRef.current, {
            scale: 1.03,
            duration: 8,
            repeat: -1,
            yoyo: true, // Anima de ida y vuelta
            ease: 'power1.inOut',
        });
    }, []); // El array vacío asegura que se ejecute solo una vez

    // Variantes de Framer Motion para el texto y el botón
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <section className="cta-special-section" id="ready" ref={sectionRef}>
            <div className="cta-overlay"></div>
            <motion.img
                ref={marsRef}
                src={marsPlanet}
                alt="Planeta Marte"
                className="mars-background-planet"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Una curva de ease más dramática
            />

            <div className="container cta-content">
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="cta-title" variants={contentVariants}>
                        ¿Estás Listo?
                    </motion.h2>
                    <motion.button
                        className="cta-button-special"
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={contentVariants}
                    >
                        Precalifica Para Tu Viaje
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToActionSection;