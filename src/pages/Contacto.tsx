import React, { useState } from 'react';

export const Contacto: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [tema, setTema] = useState<string>('');

  return (
    <main className="container page" style={{ display: 'grid', justifyItems: 'center' }}>
      <h1 className="page__header" style={{ textAlign: 'center' }}>Contacto</h1>
      <p className="muted" style={{ marginBottom: '1rem', textAlign: 'center' }}>Contame sobre tus objetivos y disponibilidad. Te responderé a la brevedad.</p>
      <form
        className="card"
        aria-label="Formulario de contacto"
        style={{ display: 'grid', gap: '1rem', maxWidth: 760, width: '100%' }}
        onSubmit={(e) => { e.preventDefault(); setStatus('sent'); }}
      >
        <div className="row two">
          <label htmlFor="nombre">
            <span>Nombre</span>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required style={{ width: '100%', marginTop: '.35rem' }} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input id="email" name="email" type="email" placeholder="tu@email.com"
              required style={{ width: '100%', marginTop: '.35rem' }} />
          </label>
        </div>
        <label htmlFor="tema">
          <span>Tema de la consulta</span>
          <select
            id="tema"
            name="tema"
            required
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            style={{ width: '100%', marginTop: '.35rem' }}
          >
            <option value="" disabled>Seleccioná un tema</option>
            <option value="Planes">Planes</option>
            <option value="Suplementación">Suplementación</option>
            <option value="Asesorías">Asesorías</option>
            <option value="Pagos">Pagos</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label htmlFor="mensaje">
          <span>Mensaje</span>
          <textarea id="mensaje" name="mensaje" placeholder="¿En qué te puedo ayudar?" rows={7} required style={{ width: '100%', marginTop: '.35rem' }} />
        </label>
        <div style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
          <button className="primary-btn" type="submit" style={{ width: 'fit-content' }}>Enviar</button>
          {status === 'sent' && (
            <span style={{ color: 'var(--color-primary-accent)' }}>
              ¡Mensaje enviado{tema ? ` sobre "${tema}"` : ''}! Te responderé pronto.
            </span>
          )}
        </div>
      </form>
    </main>
  );
};

export default Contacto;
