import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import './Modal.css';

// Sub-componente para el formulario
const PrequalifyForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Odisea Marciana', // Valor por defecto
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí, en una aplicación real, enviarías los datos a un servidor.
        console.log('Formulario enviado:', formData);
        // Simulamos un éxito y llamamos a la función onSuccess.
        onSuccess();
    };

    return (
        <>
            <h2>Precalifica para tu Viaje</h2>
            <p>Completa tus datos para que uno de nuestros especialistas se ponga en contacto contigo.</p>
            <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="interest">Plan de Interés</label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
                        <option>Pionero Estelar</option>
                        <option>Odisea Marciana</option>
                        <option>Conquistador Galáctico</option>
                    </select>
                </div>
                <button type="submit" className="cta-button modal-submit-btn">
                    Enviar Solicitud
                </button>
            </form>
        </>
    );
};

// Sub-componente para el mensaje de agradecimiento
const ThankYouContent = () => {
    return (
        <div className="thank-you-content">
            <div className="thank-you-icon">🚀</div>
            <h2>¡Gracias por Precalificar!</h2>
            <p>Hemos recibido tus datos correctamente. Un especialista de MarsVoyageX te contactará en las próximas 24 horas para discutir los siguientes pasos de tu odisea.</p>
            <div className="contact-info">
                <p>¿Prefieres contactarnos ahora?</p>
                <div className="contact-bubbles">
                    <a href="#" className="contact-bubble whatsapp" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="#" className="contact-bubble calendly" aria-label="Calendly">
                        <FaCalendarAlt />
                    </a>
                </div>
                <p className="contact-text">Chatea con nosotros por WhatsApp o agenda una llamada en Calendly.</p>
            </div>
        </div>
    );
};


// Componente principal del Modal
const Modal = ({ onClose, content, onPrequalifySuccess }) => {
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose} // Cierra el modal al hacer clic en el fondo
            >
                <motion.div
                    className="modal-container"
                    variants={modalVariants}
                    onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al backdrop
                >
                    <button className="close-modal-btn" onClick={onClose}>
                        <IoClose />
                    </button>
                    {content === 'prequalify' ? (
                        <PrequalifyForm onSuccess={onPrequalifySuccess} />
                    ) : (
                        <ThankYouContent />
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;