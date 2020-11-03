import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hello } from './hello';

describe('<hello />', () => {
  test('it should mount', () => {
    render(<Hello />);

    const hello = screen.getByTestId('hello');

    expect(hello).toBeInTheDocument();
  });
});
