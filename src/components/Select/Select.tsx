import { FC, useState } from 'react';

import * as styles from './Select.module.scss';

interface Option {
  label: string;
  value: string | number;
}

export interface SelectProps {
  value: string | number | null;
  onChange: (value: string | number) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Choose...',
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find(opt => opt.value === value)?.label;

  const handleOptionClick = (option: Option) => {
    if (disabled) return;
    onChange(option.value);
    setIsOpen(false);
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      {placeholder && (
        <label
          className={`${styles.label} ${isFocused || value ? styles.labelFocused : ''}`}>
          {placeholder}
        </label>
      )}

      <div
      data-testid="select-toggle"
        className={styles.select}
        onClick={() => (isOpen ? handleBlur() : handleFocus())}>
        <span
          className={`${styles.selectedValue} ${!value ? styles.placeholder : ''}`}>
          {!isOpen && (selectedLabel || placeholder)}
        </span>
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
