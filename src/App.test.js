import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders copyright license', () => {
  const {getByText} = render(<App/>);
  const linkElement = getByText(/MIT/i);
  expect(linkElement).toBeInTheDocument();
});
