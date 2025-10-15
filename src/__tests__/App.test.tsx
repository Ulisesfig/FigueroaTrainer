/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('App', () => {
  it('renderiza headline principal', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Transforma tu cuerpo/i)).toBeInTheDocument();
  });
});
