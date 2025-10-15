import React from 'react';
import { plans } from '@/config/plans';
import { Link } from 'react-router-dom';

export const Planes: React.FC = () => {
  return (
    <main className="container page">
      <h1 className="page__header">Planes</h1>
      <p className="muted">Elige el plan que mejor se adapte a tu objetivo y disponibilidad. Todos incluyen calentamiento, progresiones y recomendaciones de recuperación.</p>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1.2rem' }}>
        {plans.map(plan => (
          <article key={plan.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', position: 'relative' }}>
            {plan.recommended && (
              <span style={{ position: 'absolute', top: 12, right: 12, background: 'var(--gradient-primary)', color: '#101E39', padding: '.28rem .6rem', borderRadius: 999, fontSize: '.7rem', fontWeight: 800, letterSpacing: '.5px' }}>Recomendado</span>
            )}
            <header>
              <h3 style={{ margin: '0 0 .35rem' }}>{plan.title}</h3>
              <p style={{ margin: 0, opacity: .95 }}>{plan.shortDesc}</p>
            </header>
            <ul style={{ margin: '.5rem 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '.4rem' }}>
              {plan.includes.map(i => (
                <li key={i} style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary-accent)', display: 'inline-block' }} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
              <strong style={{ color: 'var(--color-primary-accent)' }}>{plan.price}</strong>
              <Link className="primary-btn" to={`/planes/${plan.slug}`} style={{ padding: '.6rem 1rem', fontSize: '.95rem' }}>Ver detalle</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Planes;
