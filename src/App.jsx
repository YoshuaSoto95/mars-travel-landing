import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import CallToActionSection from './components/CallToAction/CallToAction';

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
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Plans />
      <Testimonials />
      <CallToActionSection openPrequalifyModal={openPrequalifyModal} openThankYouModal={openThankYouModal} />
    </div>
  );
}

export default App;