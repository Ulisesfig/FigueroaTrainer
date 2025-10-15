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
