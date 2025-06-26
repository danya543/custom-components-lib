import React from 'react';
import * as styles from './TextField.module.scss';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    error?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
    value,
    placeholder = '',
    onChange,
    className = '',
    error = false,
    ...rest
}) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <div className={`${styles.wrapper} ${className ? styles[className] : ''} ${error ? styles.error : ''}`}>
            {(isFocused || value) && (
                <label
                    className={`${styles.label} ${isFocused || value ? styles.labelFocused : ''} ${error ? styles.errorLabel : ''}`}>
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
                {...rest}
            />
        </div >
    );
};
