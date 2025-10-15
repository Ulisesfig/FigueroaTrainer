import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const scrolledRef = useRef(scrolled);
    scrolledRef.current = scrolled;
    useEffect(() => {
        let ticking = false;
        const THRESHOLD_ON = 80; // activar estado scrolled al pasar 80px
        const THRESHOLD_OFF = 40; // desactivar al volver por debajo de 40px (histéresis)
        const handle = () => {
            if (ticking)
                return;
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
    return (_jsx("nav", { className: scrolled ? 'nav nav--scrolled' : 'nav', children: _jsxs("div", { className: "container nav__inner", children: [_jsx(Link, { to: "/", className: "nav__brand", "aria-label": "Figueroa Trainer - inicio", children: _jsx("img", { src: "/logo.png", alt: "Figueroa Trainer", className: "nav__logo", height: 90, width: 260, loading: "eager" }) }), _jsxs("button", { className: "nav__toggle", "aria-label": "Abrir men\u00FA", "aria-expanded": "false", "aria-controls": "nav-menu", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("div", { id: "nav-menu", className: "nav__links", children: [_jsx(Link, { to: "/planes", children: "Planes" }), _jsx(Link, { to: "/tienda", children: "Tienda" }), _jsx(Link, { to: "/contacto", children: "Contacto" }), _jsx(Link, { to: "/login", style: {
                                background: 'var(--gradient-primary)',
                                color: '#101E39',
                                padding: '.55rem 1rem',
                                borderRadius: '999px',
                                fontSize: '.8rem',
                                fontWeight: 600,
                                letterSpacing: '.5px',
                                textDecoration: 'none'
                            }, children: "Login" })] })] }) }));
};
