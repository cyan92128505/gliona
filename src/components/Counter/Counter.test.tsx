import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe('<Counter />', () => {
  test('it should mount', () => {
    const state = { count: 0 };

    render(<Counter />);

    const counter = screen.getByTestId('Counter');

    expect(counter).toBeInTheDocument();
  });
});
