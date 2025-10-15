import React from 'react';
import { contactInfo } from '@/config/contact';

export const Footer: React.FC = () => {
  const instagramUrl = contactInfo.instagram;
  const youtubeUrl = contactInfo.youtube || 'https://youtube.com';
  const base = import.meta.env.BASE_URL || '/';

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__left">
          <a
            className="social-btn"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram"
          >
            <span className="social-btn__icon" aria-hidden>
              {/* Instagram-like camera icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#101E39" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.5" stroke="#101E39" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#101E39" />
              </svg>
            </span>
            <span className="social-btn__label">Instagram</span>
          </a>
        </div>

        <div className="site-footer__logoWrap" aria-label="Marca">
          <img
            className="site-footer__logo"
            src={`${base}loguito.png`}
            alt="Figueroa Trainer"
            width={160}
            height={60}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${base}logo.png`; }}
            loading="lazy"
          />
        </div>

        <div className="site-footer__right">
          <a
            className="social-btn"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir YouTube"
          >
            <span className="social-btn__icon" aria-hidden>
              {/* YouTube-like play icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="#101E39" strokeWidth="2" />
                <path d="M10 9.5L15 12L10 14.5V9.5Z" fill="#101E39" />
              </svg>
            </span>
            <span className="social-btn__label">YouTube</span>
          </a>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '.75rem', opacity: .75, fontSize: '.85rem' }}>
        © {new Date().getFullYear()} Figueroa Trainer. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
