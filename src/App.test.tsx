import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App React Component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/App React Component/i);
  expect(linkElement).toBeInTheDocument();
});
