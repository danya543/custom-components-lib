import { FC, useState } from 'react';

import * as styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error?: boolean;
  disabled?: boolean;
}

export const TextField: FC<TextFieldProps> = ({
  value,
  placeholder = '',
  onChange,
  className = '',
  error = false,
  disabled = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${className ? styles[className] : ''} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
    >
      {(isFocused || value) && (
        <label
          className={`${styles.label} ${isFocused || value ? styles.labelFocused : ''} ${error ? styles.errorLabel : ''}`}
        >
          {placeholder}
        </label>
      )}
      <input
        className={`${styles.textField}`}
        value={value}
        onChange={onChange}
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};
