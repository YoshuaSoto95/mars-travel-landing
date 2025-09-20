import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'; // Para el modal de precalificación y agradecimiento
import './App.css'; // Estilos globales

function App() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('prequalify'); // 'prequalify' o 'thankyou'

  const openPrequalifyModal = () => {
    setModalContent('prequalify');
    setIsModalOpen(true);
  };

  const openThankYouModal = () => {
    setModalContent('thankyou');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header openModal={openPrequalifyModal} />
      <Hero openModal={openPrequalifyModal} />
      <About />
      <Benefits />
      <Plans />
      <Testimonials />
      <CallToAction openModal={openPrequalifyModal} />
      <Footer openModal={openPrequalifyModal} />

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          content={modalContent}
          onPrequalifySuccess={openThankYouModal}
        />
      )}
    </div>
  );
}

export default App;