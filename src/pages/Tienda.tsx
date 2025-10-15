import React from 'react';

export const Tienda: React.FC = () => {
  const categorias = ['Suplementación', 'Accesorios', 'Indumentaria'];
  return (
    <main className="container page">
      <h1 className="page__header">Tienda</h1>
      <p className="muted">Muy pronto vas a poder adquirir suplementación y productos. Mientras tanto, podés explorar categorías.</p>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '1rem' }}>
        {categorias.map(c => (
          <div key={c} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            <h3 style={{ margin: 0 }}>{c}</h3>
            <p style={{ margin: 0, opacity: .9 }}>Próximamente</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tienda;
