import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Plans.css';

// Datos de los planes. El 'highlighted: true' marcará nuestro plan destacado.
const plansData = [
    {
        name: 'Pionero Estelar',
        price: 'Contactar',
        features: [
            'Asiento en cabina compartida',
            'Entrenamiento básico de astronauta',
            'Kit de bienvenida exclusivo',
            'Vistas orbitales de la Tierra',
            'Certificado de viaje espacial',
        ],
        highlighted: false,
        cta: 'Consultar Disponibilidad',
    },
    {
        name: 'Odisea Marciana',
        price: 'Contactar',
        features: [
            'Suite privada con vista panorámica',
            'Entrenamiento avanzado completo',
            'Acceso a todas las áreas comunes',
            'Excursión guiada en la superficie de Marte',
            'Comunicación prioritaria con la Tierra',
            'Traje espacial personalizado',
        ],
        highlighted: true,
        cta: 'Precalificar Ahora',
    },
    {
        name: 'Conquistador Galáctico',
        price: 'Contactar',
        features: [
            'Comandancia de suite de lujo',
            'Entrenamiento personalizado con astronautas',
            'Acceso VIP a zonas restringidas',
            'Múltiples excursiones en Marte',
            'Mayordomo robótico personal',
            'Prioridad de embarque y desembarque',
        ],
        highlighted: false,
        cta: 'Solicitar Exclusividad',
    },
];

const Plans = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 12,
            },
        },
    };

    return (
        <section className="plans-section" id="plans" ref={ref}>
            <div className="plans-background-overlay"></div>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Elige Tu Odisea
                </motion.h2>

                <motion.div
                    className="plans-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {plansData.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
                            variants={itemVariants}
                            whileHover={{
                                y: -15,
                                boxShadow: '0px 20px 40px rgba(138, 43, 226, 0.5)',
                            }}
                        >
                            {plan.highlighted && <div className="highlight-badge">Recomendado</div>}
                            <div className="plan-header">
                                <h3>{plan.name}</h3>
                                <p className="plan-price">{plan.price}</p>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>
                            <button className="cta-button plan-cta">{plan.cta}</button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Plans;