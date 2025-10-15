import React, { useMemo, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { getPlanBySlug, faqs } from '@/config/plans';
import { contactInfo } from '@/config/contact';
import { useAuth } from '@/context/AuthContext';

export const PlanDetalle: React.FC = () => {
  const { slug } = useParams();
  const plan = getPlanBySlug(slug);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!plan) {
    return (
      <main className="container page" style={{ textAlign: 'center' }}>
        <h1 className="page__header">Plan no encontrado</h1>
        <p className="muted">El plan seleccionado no existe o fue movido.</p>
        <Link to="/planes" className="primary-btn" style={{ marginTop: '.8rem' }}>Ver todos los planes</Link>
      </main>
    );
  }

  return (
    <main className="container page">
      <header style={{ marginBottom: '1rem' }}>
        <h1 className="page__header" style={{ marginBottom: '.25rem' }}>{plan.title}</h1>
        <p className="muted" style={{ margin: 0 }}>{plan.shortDesc}</p>
      </header>

      <section className="grid" style={{ gridTemplateColumns: '1.2fr .8fr', gap: '1.2rem' }}>
        <article className="card" style={{ display: 'grid', gap: '.75rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>¿Qué incluye?</h2>
          <p style={{ margin: 0 }}>{plan.longDesc}</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '.45rem' }}>
            {plan.includes.map(item => (
              <li key={item} style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary-accent)', display: 'inline-block' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <aside className="card" style={{ display: 'grid', gap: '.8rem', alignSelf: 'start' }}>
          {(() => {
            // Helpers para cálculo y formato
            const parseMonthly = (price: string) => {
              const digits = price.replace(/[^\d]/g, '');
              const num = parseInt(digits, 10);
              return isNaN(num) ? 0 : num;
            };
            const [months, setMonths] = useState<number>(1);
            const monthly = useMemo(() => parseMonthly(plan.price), [plan.price]);
            const discountPct = useMemo(() => (months >= 12 ? 15 : months >= 6 ? 10 : months >= 3 ? 5 : 0), [months]);
            const total = useMemo(() => monthly * months, [monthly, months]);
            const discounted = useMemo(() => Math.round(total * (1 - discountPct / 100)), [total, discountPct]);
            const perMonthAfter = useMemo(() => Math.round(discounted / months), [discounted, months]);
            const nf = useMemo(() => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }), []);
            // Normalizar teléfono a formato internacional AR (solo dígitos), sin sumar ni quitar prefijos
            const phone = contactInfo.telefono.replace(/[^\d]/g, '');

            // Construcción del mensaje tipo factura
            const clienteNombre = (user?.name || '').trim();
            const line = (k: string, v: string) => `• ${k}: ${v}`;
            const factura = [
              `Hola, soy ${clienteNombre || '(tu nombre)'} 👋`,
              '',
              'Nueva solicitud de plan',
              line('Plan', plan.title),
              line('Meses', `${months}`),
              line('Descuento', `${discountPct}%`),
              line('Precio final', nf.format(discounted)),
              '',
              '¿Cómo seguimos?',
            ].join('\n');
            const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(factura)}`;

            const handleClick = (e: React.MouseEvent) => {
              if (!isAuthenticated) {
                e.preventDefault();
                const returnUrl = location.pathname + location.search + location.hash;
                navigate(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
              }
            };

            return (
              <>
                <div>
                  <div style={{ opacity: .9, marginBottom: '.25rem' }}>Precio base</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-accent)' }}>{plan.price}</div>
                </div>

                <label htmlFor="months" style={{ display: 'grid', gap: '.35rem' }}>
                  <span>Meses</span>
                  <select id="months" value={months} onChange={(e) => setMonths(parseInt(e.target.value, 10))} style={{ width: '100%' }}>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </label>

                <div style={{ display: 'grid', gap: '.25rem', fontSize: '.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Descuento</span>
                    <strong>{discountPct}%</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total</span>
                    <strong>{nf.format(discounted)}</strong>
                  </div>
                  <div className="muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.85rem' }}>
                    <span>Equivale a</span>
                    <span>{nf.format(perMonthAfter)} / mes</span>
                  </div>
                </div>

                <a className="primary-btn" href={waHref} target="_blank" rel="noreferrer" onClick={handleClick}>Quiero este plan</a>
              </>
            );
          })()}
        </aside>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h2 style={{ margin: '0 0 .8rem', fontSize: '1.2rem' }}>Preguntas frecuentes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '.75rem' }}>
          {faqs.map(f => (
            <details key={f.q} className="card" style={{ width: '100%' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700 }}>{f.q}</summary>
              <p style={{ margin: '.5rem 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PlanDetalle;
