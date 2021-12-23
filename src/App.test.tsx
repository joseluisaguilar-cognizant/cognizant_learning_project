import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading data/i);
  expect(linkElement).toBeInTheDocument();

  // Give us the oportunity to see the HTML output in our console:
  // screen.debug();
});

test('should work, at least...', () => {
  expect(true).toBeTruthy();
});
