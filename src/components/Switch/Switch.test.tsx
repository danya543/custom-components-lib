import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

jest.mock('./Switch.module.scss', () => ({
    switch: 'switch',
    switch_checked: 'switch_checked',
    switch_disabled: 'switch_disabled',
    switch_thumb: 'switch_thumb',
}));

describe('Switch component', () => {
    it('renders correctly', () => {
        render(<Switch checked={false} onChange={() => { }} />);
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('calls onChange with correct value when clicked', () => {
        const handleChange = jest.fn();
        render(<Switch checked={false} onChange={handleChange} />);

        fireEvent.click(screen.getByRole('switch'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('does not call onChange when disabled', () => {
        const handleChange = jest.fn();
        render(<Switch checked={false} onChange={handleChange} disabled />);

        fireEvent.click(screen.getByRole('switch'));
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('has checked class when checked is true', () => {
        render(<Switch checked={true} onChange={() => { }} />);

        const switchElement = screen.getByRole('switch');
        expect(switchElement.className).toContain('switch_checked');
    });

    it('has disabled class when disabled is true', () => {
        render(<Switch checked={false} onChange={() => { }} disabled />);

        const switchElement = screen.getByRole('switch');
        expect(switchElement.className).toContain('switch_disabled');
    });
});
