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
    render(
      <Select
        label="Choose"
        value={null}
        onChange={() => {}}
        options={options}
      />,
    );
    expect(screen.getByText('Choose...')).toBeInTheDocument();
    expect(screen.getByText('Choose')).toBeInTheDocument();
  });

  it('renders selected value', () => {
    render(
      <Select label="Choose" value="2" onChange={() => {}} options={options} />,
    );
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('opens options list on click and selects option', () => {
    const handleChange = jest.fn();
    render(
      <Select
        label="Choose"
        value={null}
        onChange={handleChange}
        options={options}
      />,
    );

    const select = screen.getByText('Choose...');
    fireEvent.click(select);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 3'));
    expect(handleChange).toHaveBeenCalledWith('3');
  });

  it('disables interaction when disabled prop is true', () => {
    const handleChange = jest.fn();
    render(
      <Select
        label="Choose"
        value={null}
        onChange={handleChange}
        options={options}
        disabled
      />,
    );

    fireEvent.click(screen.getByText('Choose...'));
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
