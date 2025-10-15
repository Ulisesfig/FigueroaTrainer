import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { App } from '../App';
describe('App', () => {
    it('renderiza headline principal', () => {
        render(_jsx(MemoryRouter, { children: _jsx(App, {}) }));
        expect(screen.getByText(/Transforma tu cuerpo/i)).toBeInTheDocument();
    });
});
