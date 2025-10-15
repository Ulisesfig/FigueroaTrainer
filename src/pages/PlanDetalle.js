import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { getPlanBySlug, faqs } from '@/config/plans';
import { contactInfo } from '@/config/contact';
import { useAuth } from '@/context/AuthContext';
export const PlanDetalle = () => {
    const { slug } = useParams();
    const plan = getPlanBySlug(slug);
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    if (!plan) {
        return (_jsxs("main", { className: "container page", style: { textAlign: 'center' }, children: [_jsx("h1", { className: "page__header", children: "Plan no encontrado" }), _jsx("p", { className: "muted", children: "El plan seleccionado no existe o fue movido." }), _jsx(Link, { to: "/planes", className: "primary-btn", style: { marginTop: '.8rem' }, children: "Ver todos los planes" })] }));
    }
    return (_jsxs("main", { className: "container page", children: [_jsxs("header", { style: { marginBottom: '1rem' }, children: [_jsx("h1", { className: "page__header", style: { marginBottom: '.25rem' }, children: plan.title }), _jsx("p", { className: "muted", style: { margin: 0 }, children: plan.shortDesc })] }), _jsxs("section", { className: "grid", style: { gridTemplateColumns: '1.2fr .8fr', gap: '1.2rem' }, children: [_jsxs("article", { className: "card", style: { display: 'grid', gap: '.75rem' }, children: [_jsx("h2", { style: { margin: 0, fontSize: '1.2rem' }, children: "\u00BFQu\u00E9 incluye?" }), _jsx("p", { style: { margin: 0 }, children: plan.longDesc }), _jsx("ul", { style: { margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '.45rem' }, children: plan.includes.map(item => (_jsxs("li", { style: { display: 'flex', gap: '.5rem', alignItems: 'center' }, children: [_jsx("span", { style: { width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary-accent)', display: 'inline-block' } }), _jsx("span", { children: item })] }, item))) })] }), _jsx("aside", { className: "card", style: { display: 'grid', gap: '.8rem', alignSelf: 'start' }, children: (() => {
                            // Helpers para cálculo y formato
                            const parseMonthly = (price) => {
                                const digits = price.replace(/[^\d]/g, '');
                                const num = parseInt(digits, 10);
                                return isNaN(num) ? 0 : num;
                            };
                            const [months, setMonths] = useState(1);
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
                            const line = (k, v) => `• ${k}: ${v}`;
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
                            const handleClick = (e) => {
                                if (!isAuthenticated) {
                                    e.preventDefault();
                                    const returnUrl = location.pathname + location.search + location.hash;
                                    navigate(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
                                }
                            };
                            return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("div", { style: { opacity: .9, marginBottom: '.25rem' }, children: "Precio base" }), _jsx("div", { style: { fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-accent)' }, children: plan.price })] }), _jsxs("label", { htmlFor: "months", style: { display: 'grid', gap: '.35rem' }, children: [_jsx("span", { children: "Meses" }), _jsx("select", { id: "months", value: months, onChange: (e) => setMonths(parseInt(e.target.value, 10)), style: { width: '100%' }, children: Array.from({ length: 12 }).map((_, i) => (_jsx("option", { value: i + 1, children: i + 1 }, i + 1))) })] }), _jsxs("div", { style: { display: 'grid', gap: '.25rem', fontSize: '.95rem' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("span", { children: "Descuento" }), _jsxs("strong", { children: [discountPct, "%"] })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("span", { children: "Total" }), _jsx("strong", { children: nf.format(discounted) })] }), _jsxs("div", { className: "muted", style: { display: 'flex', justifyContent: 'space-between', fontSize: '.85rem' }, children: [_jsx("span", { children: "Equivale a" }), _jsxs("span", { children: [nf.format(perMonthAfter), " / mes"] })] })] }), _jsx("a", { className: "primary-btn", href: waHref, target: "_blank", rel: "noreferrer", onClick: handleClick, children: "Quiero este plan" })] }));
                        })() })] }), _jsxs("section", { style: { marginTop: '1.5rem' }, children: [_jsx("h2", { style: { margin: '0 0 .8rem', fontSize: '1.2rem' }, children: "Preguntas frecuentes" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: '1fr', gap: '.75rem' }, children: faqs.map(f => (_jsxs("details", { className: "card", style: { width: '100%' }, children: [_jsx("summary", { style: { cursor: 'pointer', fontWeight: 700 }, children: f.q }), _jsx("p", { style: { margin: '.5rem 0 0' }, children: f.a })] }, f.q))) })] })] }));
};
export default PlanDetalle;
