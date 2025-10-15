import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(scrolled);
  scrolledRef.current = scrolled;

  useEffect(() => {
    let ticking = false;
    const THRESHOLD_ON = 80;  // activar estado scrolled al pasar 80px
    const THRESHOLD_OFF = 40; // desactivar al volver por debajo de 40px (histéresis)

    const handle = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset || 0;
        const next = scrolledRef.current ? y > THRESHOLD_OFF : y > THRESHOLD_ON;
        if (next !== scrolledRef.current) {
          scrolledRef.current = next;
          setScrolled(next);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handle, { passive: true });
    // Ejecutar una vez al montar para establecer el estado inicial
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const base = import.meta.env.BASE_URL || '/';

  return (
    <nav className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Figueroa Trainer - inicio">
          <img
            src={`${base}logo.png`}
            alt="Figueroa Trainer"
            className="nav__logo"
            height={90}
            width={260}
            loading="eager"
          />
        </Link>
        <button className="nav__toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-menu">
          <span />
          <span />
          <span />
        </button>
        <div id="nav-menu" className="nav__links">
          <Link to="/planes">Planes</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/login" style={{
            background: 'var(--gradient-primary)',
            color: '#101E39',
            padding: '.55rem 1rem',
            borderRadius: '999px',
            fontSize: '.8rem',
            fontWeight: 600,
            letterSpacing: '.5px',
            textDecoration: 'none'
          }}>Login</Link>
        </div>
      </div>
    </nav>
  );
};
