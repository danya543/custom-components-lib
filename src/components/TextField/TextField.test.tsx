import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

jest.mock('./TextField.module.scss', () => ({
    wrapper: 'wrapper',
    textField: 'textField',
    label: 'label',
    labelFocused: 'labelFocused',
    error: 'error',
    errorLabel: 'errorLabel',
}));

describe('TextField component', () => {
    it('renders with placeholder', () => {
        render(<TextField value="" placeholder="Your Name" onChange={() => { }} />);
        expect(screen.getByText('Your Name')).toBeInTheDocument();
    });

    it('label moves up when focused', () => {
        render(<TextField value="" placeholder="Your Name" onChange={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        const label = screen.getByText('Your Name');
        expect(label.className).toContain('labelFocused');
    });

    it('label stays up when value is present', () => {
        render(<TextField value="John" placeholder="Your Name" onChange={() => { }} />);
        const label = screen.getByText('Your Name');
        expect(label.className).toContain('labelFocused');
    });

    it('applies error class when error prop is true', () => {
        render(<TextField value="" placeholder="Your Name" error onChange={() => { }} />);
        const wrapper = screen.getByText('Your Name').parentElement;
        expect(wrapper?.className).toContain('error');
    });

    it('calls onChange when typing', () => {
        const handleChange = jest.fn();
        render(<TextField value="" placeholder="Your Name" onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
