import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';
import marsImage from '../../assets/imagen/mars.png';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Retraso entre cada animación hija
            },
        },
    };

    // Variantes para los elementos que vienen de abajo.
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    // Variantes para la imagen que viene de la izquierda.
    const imageVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    // Variantes para el texto que viene de la derecha.
    const textVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };


    return (
        <section className="about-section" id="about">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        Sobre MarsVoyageX
                    </motion.h2>

                    <div className="about-content">
                        <motion.div className="about-image-container" variants={imageVariants}>
                            {/* Animación de flotación contínua */}
                            <motion.img
                                src={marsImage}
                                alt="Planeta Marte Flotando"
                                animate={{
                                    y: [0, -20, 0], // Movimiento vertical
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: Infinity, // Repetir la animación infinitamente
                                    repeatType: "loop",
                                }}
                            />
                        </motion.div>
                        <motion.div className="about-text-container" variants={textVariants}>
                            <h3>Nuestra Misión: Hacer de la Humanidad una Especie Interplanetaria</h3>
                            <p>
                                En MarsVoyageX, no solo vendemos viajes; ofrecemos una puerta a un nuevo capítulo en la historia humana. Nacimos de la visión de que el futuro de la humanidad reside entre las estrellas. Nuestro equipo está compuesto por pioneros, ingenieros y soñadores dedicados a hacer que los viajes espaciales sean seguros, accesibles y absolutamente inolvidables.
                            </p>
                            <p>
                                Con tecnología de punta y un compromiso inquebrantable con la seguridad, te llevamos más allá de la atmósfera terrestre para que puedas contemplar el amanecer rojo de Marte con tus propios ojos.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;