import React from 'react';
import ReactDOM from 'react-dom';
import App, { factorial } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('factorial function', () => {
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
  expect(factorial(10)).toBe(3628800);
})
