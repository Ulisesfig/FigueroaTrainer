import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const CrearCuenta = () => {
    const [telefono, setTelefono] = useState('');
    const [telError, setTelError] = useState(null);
    const [country, setCountry] = useState('AR');
    const [dial, setDial] = useState('54');
    const countries = [
        { code: 'AR', name: 'Argentina', dial: '54' },
        { code: 'US', name: 'Estados Unidos', dial: '1' },
        { code: 'ES', name: 'España', dial: '34' },
        { code: 'BR', name: 'Brasil', dial: '55' },
        { code: 'CL', name: 'Chile', dial: '56' },
        { code: 'UY', name: 'Uruguay', dial: '598' },
        { code: 'PY', name: 'Paraguay', dial: '595' },
        { code: 'BO', name: 'Bolivia', dial: '591' },
        { code: 'PE', name: 'Perú', dial: '51' },
        { code: 'MX', name: 'México', dial: '52' },
        { code: 'CO', name: 'Colombia', dial: '57' },
        { code: 'VE', name: 'Venezuela', dial: '58' },
        { code: 'EC', name: 'Ecuador', dial: '593' },
        { code: 'PR', name: 'Puerto Rico', dial: '1' },
        { code: 'DO', name: 'República Dominicana', dial: '1' },
        { code: 'GT', name: 'Guatemala', dial: '502' },
        { code: 'HN', name: 'Honduras', dial: '504' },
        { code: 'NI', name: 'Nicaragua', dial: '505' },
        { code: 'SV', name: 'El Salvador', dial: '503' },
        { code: 'CR', name: 'Costa Rica', dial: '506' },
        { code: 'PA', name: 'Panamá', dial: '507' },
        { code: 'CA', name: 'Canadá', dial: '1' },
        { code: 'GB', name: 'Reino Unido', dial: '44' },
        { code: 'FR', name: 'Francia', dial: '33' },
        { code: 'DE', name: 'Alemania', dial: '49' },
        { code: 'IT', name: 'Italia', dial: '39' },
        { code: 'PT', name: 'Portugal', dial: '351' },
        { code: 'NL', name: 'Países Bajos', dial: '31' },
        { code: 'BE', name: 'Bélgica', dial: '32' },
        { code: 'IE', name: 'Irlanda', dial: '353' },
        { code: 'SE', name: 'Suecia', dial: '46' },
        { code: 'NO', name: 'Noruega', dial: '47' },
        { code: 'DK', name: 'Dinamarca', dial: '45' },
        { code: 'FI', name: 'Finlandia', dial: '358' },
        { code: 'RU', name: 'Rusia', dial: '7' },
        { code: 'CN', name: 'China', dial: '86' },
        { code: 'JP', name: 'Japón', dial: '81' },
        { code: 'KR', name: 'Corea del Sur', dial: '82' },
        { code: 'IN', name: 'India', dial: '91' },
        { code: 'AU', name: 'Australia', dial: '61' },
        { code: 'NZ', name: 'Nueva Zelanda', dial: '64' },
        { code: 'ZA', name: 'Sudáfrica', dial: '27' },
        { code: 'EG', name: 'Egipto', dial: '20' },
        { code: 'MA', name: 'Marruecos', dial: '212' },
        { code: 'NG', name: 'Nigeria', dial: '234' },
        { code: 'KE', name: 'Kenia', dial: '254' },
        { code: 'SA', name: 'Arabia Saudita', dial: '966' },
        { code: 'AE', name: 'Emiratos Árabes Unidos', dial: '971' },
        { code: 'TR', name: 'Turquía', dial: '90' },
        { code: 'GR', name: 'Grecia', dial: '30' },
        { code: 'CH', name: 'Suiza', dial: '41' },
        { code: 'AT', name: 'Austria', dial: '43' },
        { code: 'PL', name: 'Polonia', dial: '48' },
        { code: 'CZ', name: 'Chequia', dial: '420' },
        { code: 'HU', name: 'Hungría', dial: '36' },
        { code: 'RO', name: 'Rumania', dial: '40' },
        { code: 'BG', name: 'Bulgaria', dial: '359' },
        { code: 'UA', name: 'Ucrania', dial: '380' },
        { code: 'IL', name: 'Israel', dial: '972' },
    ];
    const flagEmoji = (cc) => cc
        .toUpperCase()
        .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
    const handleDigitKeyDown = (e) => {
        const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
        if (allowed.includes(e.key))
            return;
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };
    const handlePasteDigits = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain') || '';
        const digits = text.replace(/[^\d]/g, '');
        const target = e.target;
        const start = target.selectionStart ?? target.value.length;
        const end = target.selectionEnd ?? target.value.length;
        const next = target.value.slice(0, start) + digits + target.value.slice(end);
        target.value = next;
        setTelefono(next);
        if (next.startsWith('15'))
            setTelError('Ingresá el número sin el 15');
        else
            setTelError(null);
    };
    return (_jsxs("main", { className: "container page", style: { display: 'grid', justifyItems: 'center' }, children: [_jsx("h1", { className: "page__header", style: { textAlign: 'center' }, children: "Crear cuenta" }), _jsxs("form", { className: "card", style: { display: 'grid', gap: '.9rem', maxWidth: 560, width: '100%' }, onSubmit: (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const nombre = String(data.get('nombre') || '').trim();
                    const apellido = String(data.get('apellido') || '').trim();
                    const fullName = [nombre, apellido].filter(Boolean).join(' ').trim();
                    try {
                        localStorage.setItem('signup:name', fullName || nombre || '');
                    }
                    catch { }
                }, children: [_jsxs("div", { className: "row two", children: [_jsxs("label", { htmlFor: "nombre", children: [_jsx("span", { children: "Nombre" }), _jsx("input", { id: "nombre", name: "nombre", type: "text", placeholder: "Tu nombre", required: true, style: { width: '100%', marginTop: '.35rem' } })] }), _jsxs("label", { htmlFor: "apellido", children: [_jsx("span", { children: "Apellido" }), _jsx("input", { id: "apellido", name: "apellido", type: "text", placeholder: "Tu apellido", required: true, style: { width: '100%', marginTop: '.35rem' } })] })] }), _jsxs("div", { className: "row two", children: [_jsxs("label", { htmlFor: "email", children: [_jsx("span", { children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", placeholder: "tu@email.com", required: true, style: { width: '100%', marginTop: '.35rem' } })] }), _jsxs("label", { htmlFor: "email2", children: [_jsx("span", { children: "Repetir email" }), _jsx("input", { id: "email2", name: "email2", type: "email", placeholder: "Repet\u00ED tu email", required: true, style: { width: '100%', marginTop: '.35rem' } })] })] }), _jsxs("div", { className: "row two", children: [_jsxs("label", { htmlFor: "password", children: [_jsx("span", { children: "Contrase\u00F1a" }), _jsx("input", { id: "password", name: "password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", required: true, style: { width: '100%', marginTop: '.35rem' } })] }), _jsxs("label", { htmlFor: "password2", children: [_jsx("span", { children: "Repetir contrase\u00F1a" }), _jsx("input", { id: "password2", name: "password2", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", required: true, style: { width: '100%', marginTop: '.35rem' } })] })] }), _jsxs("div", { className: "row area-phone", children: [_jsxs("label", { htmlFor: "area", children: [_jsx("span", { children: "\u00C1rea" }), _jsx("select", { id: "area", name: "area", value: country, onChange: (e) => {
                                            const c = e.target.value;
                                            setCountry(c);
                                            const found = countries.find(x => x.code === c);
                                            setDial(found ? found.dial : '');
                                        }, style: { width: '100%', marginTop: '.35rem' }, children: countries.map(c => (_jsxs("option", { value: c.code, children: [flagEmoji(c.code), " ", c.name, " (+", c.dial, ")"] }, c.code))) })] }), _jsxs("label", { htmlFor: "telefono", children: [_jsxs("span", { children: ["Tel\u00E9fono (solo n\u00FAmeros) ", dial ? _jsxs("em", { style: { opacity: .8 }, children: ["+", dial] }) : null] }), _jsx("input", { id: "telefono", name: "telefono", type: "text", inputMode: "numeric", placeholder: "Ej: 3511234567", value: telefono, onChange: (e) => {
                                            const v = e.target.value.replace(/[^\d]/g, '');
                                            setTelefono(v);
                                            if (v.startsWith('15'))
                                                setTelError('Ingresá el número sin el 15');
                                            else
                                                setTelError(null);
                                        }, onKeyDown: handleDigitKeyDown, onPaste: handlePasteDigits, required: true, 
                                        // Sin patrones complejos: solo números; longitud libre
                                        style: { width: '100%', marginTop: '.35rem' } }), telError && _jsx("small", { style: { color: 'salmon' }, children: telError })] })] }), _jsx("button", { className: "primary-btn", type: "submit", style: { width: 'fit-content' }, children: "Crear cuenta" })] })] }));
};
export default CrearCuenta;
