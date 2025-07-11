import { FC } from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  text,
  children,
  onClick,
  className = '',
  variant = 'contained',
  size,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${className ? styles[className] : ''} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
      {...rest}
    >
      {children || text}
    </button>
  );
};
