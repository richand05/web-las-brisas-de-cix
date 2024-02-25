import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CardDetailsNearvy from './components/CardDetails/CardDetailsNearvy';
import CardDetailsPlaces from './components/CardDetails/CardDetailsPlaces';
import DetailsPlaceForCard from './components/DetailsPlaceForCard/DetailsPlaceForCard';
import Contacts from './components/Contacts/Contacts';
import LocationSection from './components/LocationSection/LocationSection';
import Footer from './components/Footer/Footer';

function App() {
  const [showButton, setShowButton] = useState(false);

  // Función para manejar el scroll y mostrar u ocultar el botón
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Función para llevar al usuario al principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Agregar un listener para el evento scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remover el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugares-cercanos" element={<CardDetailsNearvy />} />
          <Route path="/atractivos-turisticos" element={<CardDetailsPlaces />} />
          <Route path="/atractivos-turisticos/:id" element={<DetailsPlaceForCard />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <LocationSection />
      <Footer />
      
      {/* Botón de "Ir Arriba" */}
      {showButton && (
        <button 
          className="go-top-button" 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000'
          }}
        >
          Ir Arriba
        </button>
      )}
    </>
  );
}

export default App;
