import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';


test('renderiza el nombre de la app', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Cinema Go/i);
  expect(linkElement).toBeInTheDocument();
});

