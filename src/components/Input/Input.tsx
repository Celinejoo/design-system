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
      id,
      error,
      iconLeft,
      iconRight,
      fullWidth,
      className,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId(); // 자동 생성 ID
    const inputId = id || generatedId;
    return (
      <div
        className={cx(styles.wrapper, fullWidth && styles.fullWidth, className)}
      >
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
            error && styles.error,
            props.disabled && styles.disabled,
          )}
        >
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <input
            ref={ref}
            id={inputId}
            className={cx(styles.input, styles[inputSize])}
            {...props}
          />
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
