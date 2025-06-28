import { FC } from 'react';

import * as styles from './Checkbox.module.scss';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  onChange = () => {},
  disabled = false,
}) => {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`
        ${styles.checkbox}
        ${disabled ? styles.disabled : ''}
      `}
      onClick={handleToggle}
    >
      <div
        className={`
        ${styles.checkbox_box} 
        ${checked ? styles.checked : ''}
      `}
      >
        {checked && <div className={styles.checkbox_checkmark} />}
      </div>
    </div>
  );
};
