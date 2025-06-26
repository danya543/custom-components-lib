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
    it('renders input with placeholder attribute', () => {
        render(<TextField value="" placeholder="Your Name" onChange={() => { }} />);
        const input = screen.getByPlaceholderText('Your Name');
        expect(input).toBeInTheDocument();
    });

    it('renders label when focused', () => {
        render(<TextField value="" placeholder="Your Name" onChange={() => { }} />);
        const input = screen.getByPlaceholderText('Your Name');
        fireEvent.focus(input);
        expect(screen.getByText('Your Name')).toBeInTheDocument();
    });

    it('label has focused class when focused', () => {
        render(<TextField value="" placeholder="Your Name" onChange={() => { }} />);
        const input = screen.getByPlaceholderText('Your Name');
        fireEvent.focus(input);
        const label = screen.getByText('Your Name');
        expect(label.className).toContain('labelFocused');
    });

    it('label is visible and has focused class when value is present', () => {
        render(<TextField value="John" placeholder="Your Name" onChange={() => { }} />);
        const label = screen.getByText('Your Name');
        expect(label).toBeInTheDocument();
        expect(label.className).toContain('labelFocused');
    });

    it('applies error class to wrapper when error prop is true', () => {
        render(<TextField value="" placeholder="Your Name" error onChange={() => { }} />);
        const wrapper = screen.getByRole('textbox').parentElement;
        expect(wrapper?.className).toContain('error');
    });

    it('calls onChange when typing', () => {
        const handleChange = jest.fn();
        render(<TextField value="" placeholder="Your Name" onChange={handleChange} />);
        const input = screen.getByPlaceholderText('Your Name');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
