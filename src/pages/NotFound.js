import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export const NotFound = () => {
    return (_jsxs("main", { className: "container page", style: { textAlign: 'center' }, children: [_jsx("h1", { className: "page__header", children: "404 - P\u00E1gina no encontrada" }), _jsx("p", { className: "muted", style: { marginBottom: '1.2rem' }, children: "La p\u00E1gina que busc\u00E1s no existe o fue movida." }), _jsx(Link, { to: "/", className: "primary-btn", children: "Volver al inicio" })] }));
};
export default NotFound;
