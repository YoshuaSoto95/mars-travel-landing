import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Benefits.css';
// PASO 1: Importa tu video de fondo
import benefitsVideo from '../../assets/video/benefits-background.mp4';

const benefitsData = [
    {
        icon: '🛡️',
        title: 'Seguridad de Vanguardia',
        description: 'Nuestras naves cuentan con la última tecnología en seguridad y sistemas de soporte vital redundantes.'
    },
    {
        icon: '🪐',
        title: 'Vistas Inolvidables',
        description: 'Contempla la curvatura de la Tierra, los anillos de Saturno y el amanecer rojo de Marte desde tu ventana.'
    },
    // ... (los demás beneficios se quedan igual)
    {
        icon: '🚀',
        title: 'Entrenamiento de Astronauta',
        description: 'Recibe una preparación completa con nuestros simuladores de gravedad cero y entrenamiento de supervivencia.'
    },
    {
        icon: '💎',
        title: 'Lujo Interplanetario',
        description: 'Disfruta de suites privadas, comida gourmet preparada por chefs de talla mundial y entretenimiento a bordo.'
    },
    {
        icon: '🔬',
        title: 'Participa en la Ciencia',
        description: 'Oportunidad de colaborar en experimentos científicos reales durante tu viaje a Marte.'
    },
    {
        icon: '📜',
        title: 'Sé Parte de la Historia',
        description: 'Tu nombre quedará grabado como uno de los primeros pioneros en visitar otro planeta.'
    }
];

const Benefits = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section className="benefits-section" id="benefits" ref={ref}>
            {/* PASO 2: Añade el elemento de video */}
            <video
                className="benefits-video-background"
                autoPlay
                loop
                muted
                playsInline // Importante para móviles
            >
                <source src={benefitsVideo} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
            <div className="benefits-overlay"></div> {/* Overlay para legibilidad */}

            <div className="container benefits-content">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Beneficios de Viajar con Nosotros
                </motion.h2>

                <motion.div
                    className="benefits-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {benefitsData.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;