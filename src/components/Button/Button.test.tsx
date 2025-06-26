import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './Button';

jest.mock('./Button.module.scss', () => ({
  small: 'small',
  medium: 'medium',
  large: 'large',
  text: 'text',
  contained: 'contained',
  outlined: 'outlined',
}));

describe('Button component', () => {
  it('renders with text prop', () => {
    render(<Button text="Click me" size="medium" />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('renders with children instead of text', () => {
    render(<Button size="medium">Custom Child</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Custom Child');
  });

  it('applies correct size and variant classes', () => {
    render(<Button text="Test" size="small" variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('small');
    expect(button.className).toContain('outlined');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" size="medium" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
