import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Declaración mínima para BASE_URL de Vite
declare global {
	interface ImportMetaEnv {
		readonly BASE_URL: string;
	}
	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root no encontrado');
createRoot(rootElement).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<App />
	</BrowserRouter>
);

// Aplicar background-image dinámicamente usando la BASE_URL para resolver assets en /public
const base = import.meta.env.BASE_URL || '/';
try {
  document.body.style.backgroundImage = `url(${base}background-bricks.png)`;
  document.documentElement.style.setProperty('--base-url', base);
} catch (e) {}

createRoot(rootElement).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<App />
	</BrowserRouter>
);
