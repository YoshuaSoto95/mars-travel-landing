import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Plans from './components/Plans/Plans';

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
      <Plans openPrequalifyModal={openPrequalifyModal} />
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent === 'prequalify' ? (
              <>
                <h2>Precalificación para Viaje a Marte</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    openThankYouModal();
                  }}
                >
                  <label>
                    Nombre Completo:
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    Edad:
                    <input type="number" name="age" required min="18" />
                  </label>
                  <button type="submit">Enviar</button>
                </form>
              </>
            ) : (
              <>
                <h2>¡Gracias por Precalificar!</h2>
                <p>Nos pondremos en contacto contigo pronto con más detalles.</p>
                <button onClick={closeModal}>Cerrar</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;