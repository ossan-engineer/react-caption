import React from 'react';
import { render } from '@testing-library/react';
import Caption from './';

test('renders learn react link', () => {
  const { getByText } = render(<Caption>TEST</Caption>);
  const linkElement = getByText('TEST');
  expect(linkElement).toBeInTheDocument();
});
