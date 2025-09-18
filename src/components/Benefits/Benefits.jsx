import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Benefits.css';

// Datos de los beneficios. Es mejor tenerlos en un array para mapearlos fácilmente.
// He usado emojis como placeholders para los iconos. Puedes reemplazarlos por SVGs o una librería de iconos.
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

    // Variante para el contenedor de la grilla, que orquesta la animación de los hijos.
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Este es el delay entre cada tarjeta
            }
        }
    };

    // Variante para cada tarjeta individual.
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
            <div className="container">
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
                            whileHover={{ scale: 1.05, y: -10 }} // Efecto al pasar el mouse
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