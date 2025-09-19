import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import testimonialsVideo from '../../assets/video/testimonials-background.mp4';
import './Testimonials.css';

// Datos de los testimonios
const testimonialsData = [
    {
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        name: 'Elena Rodriguez',
        trip: 'Viajera de la Misión Odisea',
        comment: '"Ver el amanecer sobre el Cañón Valles Marineris... simplemente no hay palabras. MarsVoyageX superó todas mis expectativas. Una experiencia que cambia la vida."',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Jian Li',
        trip: 'Viajero de la Misión Pionero',
        comment: '"La seguridad y profesionalidad del equipo fueron impecables. Me sentí como un verdadero astronauta. ¡La sensación de flotar en la gravedad marciana es irreal!"',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Aisha Williams',
        trip: 'Viajera de la Misión Odisea',
        comment: '"Desde el entrenamiento en la Tierra hasta el último día en Marte, cada detalle fue perfecto. La comida, las vistas, la camaradería. Volvería a ir sin dudarlo."',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Marcus Thorne',
        trip: 'Viajero de la Misión Conquistador',
        comment: '"El nivel de lujo y atención personalizada es de otro mundo, literalmente. MarsVoyageX no solo te lleva a Marte, te hace sentir que perteneces allí."',
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section className="testimonials-section" id="testimonials" ref={ref}>
            <video
                className="testimonials-video-background"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={testimonialsVideo} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
            <div className="testimonials-overlay"></div>
            <motion.div
                className="container testimonials-content"
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <h2 className="section-title">Experiencias de Otro Mundo</h2>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1} // Por defecto en móvil
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    // Breakpoints para hacerlo responsive
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <p className="testimonial-comment">{testimonial.comment}</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <p className="author-trip">{testimonial.trip}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
};

export default Testimonials;