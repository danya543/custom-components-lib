import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Select } from './Select';

jest.mock('./Select.module.scss', () => ({
  wrapper: 'wrapper',
  disabled: 'disabled',
  label: 'label',
  labelFocused: 'labelFocused',
  select: 'select',
  selectedValue: 'selectedValue',
  placeholder: 'placeholder',
  arrow: 'arrow',
  options: 'options',
  option: 'option',
}));

describe('Select component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('renders with placeholder when no value is selected', () => {
    render(<Select value={null} onChange={() => {}} options={options} />);
    expect(screen.getAllByText('Choose...').length).toBeGreaterThan(0);
    expect(screen.getByTestId('select-toggle')).toHaveTextContent('Choose...');
  });

  it('renders selected value', () => {
    render(<Select value="2" onChange={() => {}} options={options} />);
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('opens options list on click and selects option', () => {
    const handleChange = jest.fn();
    render(<Select value={null} onChange={handleChange} options={options} />);

    const toggle = screen.getByTestId('select-toggle');
    fireEvent.click(toggle);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 3'));
    expect(handleChange).toHaveBeenCalledWith('3');
  });

  it('disables interaction when disabled prop is true', () => {
    const handleChange = jest.fn();
    render(
      <Select
        value={null}
        onChange={handleChange}
        options={options}
        disabled
      />,
    );

    const toggle = screen.getByTestId('select-toggle');
    fireEvent.click(toggle);

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(handleChange).not.toHaveBeenCalled();
  });
});