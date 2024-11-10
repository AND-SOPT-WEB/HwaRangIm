import { HTMLAttributes, useState } from "react";
import {
  inputWrapperStyle,
  inputLayoutStyle,
  inputStyle,
  labelStyle,
  errorMessageStyle,
} from "./Input.style";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  type: string;
  value: string | number;
  name: string;
  isValid: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  label,
  type,
  value,
  name,
  isValid,
  errorMessage,
  onChange,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div css={inputWrapperStyle}>
      <div css={inputLayoutStyle}>
        {label && (
          <label css={labelStyle} htmlFor={name}>
            {label}
          </label>
        )}
        <input
          css={inputStyle}
          placeholder={placeholder}
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {isFocused && !isValid && (
        <div css={errorMessageStyle}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
