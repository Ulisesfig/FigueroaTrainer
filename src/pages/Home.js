import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '@/config/plans';
import '@/styles/globals.css';
const features = [
    { title: 'Plan Personalizado', text: 'Entrenamientos adaptados a tu nivel, objetivos y disponibilidad real.' },
    { title: 'Seguimiento Constante', text: 'Ajustes semanales basados en métricas, sensaciones y progreso.' },
    { title: 'Hábitos y Nutrición', text: 'Guía integral para mejorar composición corporal y energía diaria.' }
];
export const Home = () => {
    const base = import.meta.env.BASE_URL || '/';
    const slides = [`${base}hero.png`, `${base}hero-2.png`, `${base}hero-3.png`, `${base}hero-4.png`];
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex((i) => (i + 1) % slides.length);
        }, 5000);
        return () => clearInterval(id);
    }, [slides.length]);
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "hero", children: _jsxs("div", { className: "hero__media", children: [_jsx("div", { className: "hero__slides", children: slides.map((src, i) => (_jsx("img", { src: src, alt: `Portada ${i + 1}`, className: i === slideIndex ? 'hero__img is-active' : 'hero__img', loading: i === 0 ? 'eager' : 'lazy' }, src))) }), _jsx("div", { className: "hero__overlay", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "hero__title", children: "Transforma tu cuerpo y tu rendimiento" }), _jsx("p", { className: "hero__subtitle", children: "Programa de entrenamiento inteligente y sostenible. Resultados medibles, enfoque humano y apoyo real para que alcances tu mejor versi\u00F3n." }), _jsx("div", { className: "hero__actions", children: _jsx(Link, { to: "/planes", className: "primary-btn", children: "Quiero Empezar" }) })] }) })] }) }), _jsxs("section", { id: "planes", className: "container", style: { marginTop: '.25rem', marginBottom: '3rem' }, children: [_jsx("h2", { style: { margin: '1.5rem 0 1.5rem', fontSize: 'clamp(1.9rem,4.2vw,2.6rem)' }, children: "Planes" }), _jsx("div", { style: { display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }, children: plans.map(p => (_jsxs("div", { style: {
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
                            }, children: [p.recommended && (_jsx("span", { style: { position: 'absolute', top: 10, right: 10, background: '#101E39', color: 'var(--color-primary-accent)', padding: '.3rem .6rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.5px' }, children: "Recomendado" })), _jsx("h3", { style: { margin: 0, fontSize: '1.2rem', fontWeight: 700, letterSpacing: '.5px' }, children: p.title }), _jsx("p", { style: { margin: 0, fontSize: '.9rem', lineHeight: 1.35 }, children: p.shortDesc }), _jsx(Link, { to: `/planes/${p.slug}`, style: {
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
                                    }, children: "Elegir" })] }, p.slug))) })] }), _jsxs("section", { id: "servicios", className: "features container", children: [_jsx("h2", { style: { textAlign: 'center', margin: '0 0 2rem' }, children: "\u00BFQu\u00E9 incluye?" }), _jsx("div", { className: "grid", style: { gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }, children: features.map(f => (_jsxs("div", { className: "card", children: [_jsx("h3", { style: { margin: '0 0 .5rem' }, children: f.title }), _jsx("p", { style: { margin: 0, fontSize: '.95rem', lineHeight: 1.4 }, children: f.text })] }, f.title))) })] })] }));
};
export default Home;
