import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar } from '@/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Planes from '@/pages/Planes';
import Tienda from '@/pages/Tienda';
import Contacto from '@/pages/Contacto';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { Footer } from '@/components/Footer';
import PlanDetalle from '@/pages/PlanDetalle';
import CrearCuenta from '@/pages/CrearCuenta';
import './styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
export const App = () => {
    return (_jsx(AuthProvider, { children: _jsxs("div", { className: "app", children: [_jsx(Navbar, {}), _jsx("div", { className: "app__content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/planes", element: _jsx(Planes, {}) }), _jsx(Route, { path: "/planes/:slug", element: _jsx(PlanDetalle, {}) }), _jsx(Route, { path: "/tienda", element: _jsx(Tienda, {}) }), _jsx(Route, { path: "/contacto", element: _jsx(Contacto, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/crear-cuenta", element: _jsx(CrearCuenta, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }), _jsx(Footer, {})] }) }));
};
export default App;
