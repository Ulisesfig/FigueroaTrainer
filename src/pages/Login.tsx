import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const returnUrl = params.get('returnUrl') || '/';

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    const password = String(data.get('password') || '').trim();
    if (!email || !password) return;
    // Simulación de login: guardamos email y un nombre opcional desde localStorage o placeholder
    const storedName = localStorage.getItem('signup:name') || '';
    login({ email, name: storedName || email.split('@')[0] });
    navigate(returnUrl, { replace: true });
  };

  return (
    <main className="container page" style={{ display: 'grid', justifyItems: 'center' }}>
      <h1 className="page__header" style={{ textAlign: 'center' }}>Login</h1>
      <form className="card" style={{ display: 'grid', gap: '.9rem', maxWidth: 560, width: '100%' }} onSubmit={onSubmit}>
        <label htmlFor="email">
          <span>Email</span>
          <input id="email" name="email" type="email" placeholder="tu@email.com" required style={{ width: '100%', marginTop: '.35rem' }} />
        </label>
        <label htmlFor="password">
          <span>Contraseña</span>
          <input id="password" name="password" type="password" placeholder="••••••••" required style={{ width: '100%', marginTop: '.35rem' }} />
        </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/contacto" style={{ color: 'var(--color-primary-accent)' }}>¿Olvidaste tu contraseña?</Link>
        </div>
        <button className="primary-btn" type="submit" style={{ width: 'fit-content' }}>Entrar</button>
        <p className="muted">¿No tenés cuenta? <Link to="/crear-cuenta" style={{ color: 'var(--color-primary-accent)' }}>Crear cuenta</Link></p>
      </form>
    </main>
  );
};

export default Login;
