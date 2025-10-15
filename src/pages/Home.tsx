import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '@/config/plans';
import '@/styles/globals.css';

const features = [
  { title: 'Plan Personalizado', text: 'Entrenamientos adaptados a tu nivel, objetivos y disponibilidad real.' },
  { title: 'Seguimiento Constante', text: 'Ajustes semanales basados en métricas, sensaciones y progreso.' },
  { title: 'Hábitos y Nutrición', text: 'Guía integral para mejorar composición corporal y energía diaria.' }
];

export const Home: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/';
  const slides = [`${base}hero.png`, `${base}hero-2.png`, `${base}hero-3.png`, `${base}hero-4.png`];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      <header className="hero">
        <div className="hero__media">
          <div className="hero__slides">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Portada ${i + 1}`}
                className={i === slideIndex ? 'hero__img is-active' : 'hero__img'}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="hero__overlay">
            <div className="container">
              <h1 className="hero__title">Transforma tu cuerpo y tu rendimiento</h1>
              <p className="hero__subtitle">Programa de entrenamiento inteligente y sostenible. Resultados medibles, enfoque humano y apoyo real para que alcances tu mejor versión.</p>
              <div className="hero__actions">
                <Link to="/planes" className="primary-btn">Quiero Empezar</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
  <section id="planes" className="container" style={{ marginTop: '.25rem', marginBottom: '3rem' }}>
        <h2 style={{ margin: '1.5rem 0 1.5rem', fontSize: 'clamp(1.9rem,4.2vw,2.6rem)' }}>Planes</h2>
        <div style={{ display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
          {plans.map(p => (
            <div key={p.slug} style={{
              background: 'linear-gradient(135deg, var(--color-primary-accent), var(--color-primary) 85%)',
              padding: '1.4rem 1.25rem 1.5rem',
              borderRadius: '28px',
              color: '#101E39',
              boxShadow: '0 6px 24px -8px rgba(0,0,0,.45)',
              display: 'flex',
              flexDirection: 'column',
              gap: '.65rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {p.recommended && (
                <span style={{ position: 'absolute', top: 10, right: 10, background: '#101E39', color: 'var(--color-primary-accent)', padding: '.3rem .6rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.5px' }}>Recomendado</span>
              )}
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, letterSpacing: '.5px' }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: '.9rem', lineHeight: 1.35 }}>{p.shortDesc}</p>
              <Link to={`/planes/${p.slug}`} style={{
                alignSelf: 'flex-start',
                marginTop: 'auto',
                fontSize: '.8rem',
                background: '#101E39',
                color: 'var(--color-primary-accent)',
                padding: '.55rem .9rem',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '.5px'
              }}>Elegir</Link>
            </div>
          ))}
        </div>
      </section>
      <section id="servicios" className="features container">
        <h2 style={{ textAlign: 'center', margin: '0 0 2rem' }}>¿Qué incluye?</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {features.map(f => (
            <div key={f.title} className="card">
              <h3 style={{ margin: '0 0 .5rem' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: '.95rem', lineHeight: 1.4 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
