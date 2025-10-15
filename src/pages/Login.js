import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const returnUrl = params.get('returnUrl') || '/';
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const email = String(data.get('email') || '').trim();
        const password = String(data.get('password') || '').trim();
        if (!email || !password)
            return;
        // Simulación de login: guardamos email y un nombre opcional desde localStorage o placeholder
        const storedName = localStorage.getItem('signup:name') || '';
        login({ email, name: storedName || email.split('@')[0] });
        navigate(returnUrl, { replace: true });
    };
    return (_jsxs("main", { className: "container page", style: { display: 'grid', justifyItems: 'center' }, children: [_jsx("h1", { className: "page__header", style: { textAlign: 'center' }, children: "Login" }), _jsxs("form", { className: "card", style: { display: 'grid', gap: '.9rem', maxWidth: 560, width: '100%' }, onSubmit: onSubmit, children: [_jsxs("label", { htmlFor: "email", children: [_jsx("span", { children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", placeholder: "tu@email.com", required: true, style: { width: '100%', marginTop: '.35rem' } })] }), _jsxs("label", { htmlFor: "password", children: [_jsx("span", { children: "Contrase\u00F1a" }), _jsx("input", { id: "password", name: "password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", required: true, style: { width: '100%', marginTop: '.35rem' } })] }), _jsx("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: _jsx(Link, { to: "/contacto", style: { color: 'var(--color-primary-accent)' }, children: "\u00BFOlvidaste tu contrase\u00F1a?" }) }), _jsx("button", { className: "primary-btn", type: "submit", style: { width: 'fit-content' }, children: "Entrar" }), _jsxs("p", { className: "muted", children: ["\u00BFNo ten\u00E9s cuenta? ", _jsx(Link, { to: "/crear-cuenta", style: { color: 'var(--color-primary-accent)' }, children: "Crear cuenta" })] })] })] }));
};
export default Login;
