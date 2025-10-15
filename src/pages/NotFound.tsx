import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <main className="container page" style={{ textAlign: 'center' }}>
      <h1 className="page__header">404 - Página no encontrada</h1>
      <p className="muted" style={{ marginBottom: '1.2rem' }}>
        La página que buscás no existe o fue movida.
      </p>
      <Link to="/" className="primary-btn">Volver al inicio</Link>
    </main>
  );
};

export default NotFound;
