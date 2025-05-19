// src/components/Input/Input.tsx
import { forwardRef, useId } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { cx } from "../../utils/cx"; // classNames 유틸 함수

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelSize = "md",
      inputSize = "md",
      varient = "outline",
      id,
      error,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId(); // 자동 생성 ID
    const inputId = id || generatedId;
    return (
      <div className={cx(styles.wrapper)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cx(styles.label, styles[labelSize])}
          >
            {label}
          </label>
        )}
        <div
          className={cx(
            styles.inputWrapper,
            styles[varient],
            styles[labelSize],
            props.disabled && styles.disabled,
          )}
        >
          <input
            ref={ref}
            id={inputId}
            className={cx(styles.input, styles[inputSize])}
            {...props}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
