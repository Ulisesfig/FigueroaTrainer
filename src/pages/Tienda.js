import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Tienda = () => {
    const categorias = ['Suplementación', 'Accesorios', 'Indumentaria'];
    return (_jsxs("main", { className: "container page", children: [_jsx("h1", { className: "page__header", children: "Tienda" }), _jsx("p", { className: "muted", children: "Muy pronto vas a poder adquirir suplementaci\u00F3n y productos. Mientras tanto, pod\u00E9s explorar categor\u00EDas." }), _jsx("div", { className: "grid", style: { gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '1rem' }, children: categorias.map(c => (_jsxs("div", { className: "card", style: { display: 'flex', flexDirection: 'column', gap: '.5rem' }, children: [_jsx("h3", { style: { margin: 0 }, children: c }), _jsx("p", { style: { margin: 0, opacity: .9 }, children: "Pr\u00F3ximamente" })] }, c))) })] }));
};
export default Tienda;
