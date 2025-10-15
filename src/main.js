import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Root element #root no encontrado');
createRoot(rootElement).render(_jsx(BrowserRouter, { children: _jsx(App, {}) }));
