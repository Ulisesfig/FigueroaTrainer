import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Planes from '@/pages/Planes';
import Tienda from '@/pages/Tienda';
import Contacto from '@/pages/Contacto';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { Footer } from '@/components/Footer';
import PlanDetalle from '@/pages/PlanDetalle';
import CrearCuenta from '@/pages/CrearCuenta';
import './styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/planes/:slug" element={<PlanDetalle />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crear-cuenta" element={<CrearCuenta />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
