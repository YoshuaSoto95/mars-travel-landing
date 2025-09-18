import React, { useRef, useEffect } from 'react';
import VideoFrame from '../../assets/video/frame-video.mp4'; // Asegúrate de tener un video adecuado
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = ({ openModal }) => {
    const heroBackgroundRef = useRef(null);

    useEffect(() => {
        // Animación de GSAP para el background dinámico
        // Puedes usar un video, un canvas con partículas, o imágenes en movimiento
        // Aquí simularemos un efecto de paralaje o movimiento de fondo simple con CSS/JS
        gsap.to(heroBackgroundRef.current, {
            backgroundPosition: "20% 50%", // Mueve el fondo ligeramente
            duration: 30, // Duración larga para un movimiento sutil
            ease: "power1.inOut",
            repeat: -1, // Repetir infinitamente
            yoyo: true // Animar de ida y vuelta
        });

        // También podrías integrar un Canvas con Three.js o un video aquí para un efecto más potente
        // Por ahora, el CSS del fondo lo hará ver como un espacio dinámico.

    }, []);

    // Variantes para Framer Motion para los elementos de texto y el botón
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Retraso entre cada animación de los hijos
                delayChildren: 1 // Retraso antes de que los hijos empiecen a animarse
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="hero-section" ref={heroBackgroundRef}>
            <video className="hero-video" autoPlay loop muted>
                <source src={VideoFrame} type="video/mp4" />
            </video>
            <div className="container hero-content-wrapper">
                <motion.div
                    className="hero-text-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>
                        El Universo Te Espera
                    </motion.h1>
                    <motion.h2 variants={itemVariants}>
                        Tu viaje a Marte comienza aquí
                    </motion.h2>
                    <motion.p variants={itemVariants}>
                        Experimenta la aventura definitiva con MarsVoyageX. Prepara tus sentidos para una odisea espacial sin precedentes.
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        className="cta-button primary"
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ¡Comienza tu Viaje Ahora!
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;