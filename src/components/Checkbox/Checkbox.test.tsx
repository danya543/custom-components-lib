import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('renders unchecked by default', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  test('renders checked if prop is true', () => {
    render(<Checkbox checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  test('calls onChange with correct value on click', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  test('does not call onChange if disabled', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} disabled />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test('does not toggle on key press if disabled', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={false} onChange={handleChange} disabled />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
