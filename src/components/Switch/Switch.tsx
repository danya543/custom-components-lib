import React from 'react';

import * as styles from './Switch.module.scss';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
}) => {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      className={`${styles.switch} ${checked ? styles.switch_checked : ''} ${disabled ? styles.switch_disabled : ''}`}
      onClick={handleToggle}>
      <div className={styles.switch_thumb} />
    </div>
  );
};
