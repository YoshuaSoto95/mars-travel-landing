import React from 'react';
// Importa los iconos que necesites
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ openModal }) => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                {/* Columna de la Marca y Redes Sociales */}
                <div className="footer-column brand-column">
                    <h3 className="footer-logo">MarsVoyageX</h3>
                    <p>Forjando el futuro de la humanidad, un planeta a la vez.</p>
                    <div className="social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                    </div>
                </div>

                {/* Columna de Enlaces de Navegación */}
                <div className="footer-column links-column">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#benefits">Beneficios</a></li>
                        <li><a href="#plans">Planes</a></li>
                        <li><a href="#testimonials">Comentarios</a></li>
                    </ul>
                </div>

                {/* Columna de Enlaces de Soporte */}
                <div className="footer-column links-column">
                    <h4>Soporte</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Términos de Servicio</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>

                {/* Columna del Call to Action Final */}
                <div className="footer-column cta-column">
                    <h4>¿Listo para el despegue?</h4>
                    <p>No esperes más para ser parte de la historia.</p>
                    <button className="cta-button footer-cta" onClick={openModal}>
                        Precalifica Ahora
                    </button>
                </div>
            </div>

            {/* Barra inferior de Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MarsVoyageX. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;