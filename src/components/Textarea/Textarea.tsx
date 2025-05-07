import { forwardRef, useId } from "react";
import { TextareaProps } from "./Textarea.types";
import styles from "./Textarea.module.scss";
import { cx } from "../../utils/cx"; // classNames 유틸 함수

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      labelSize = "md",
      textareaSize = "md",
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
    const textareaId = id ?? generatedId;
    return (
      <div
        className={cx(styles.wrapper, fullWidth && styles.fullWidth, className)}
      >
        {label && (
          <label
            htmlFor={textareaId}
            className={cx(styles.label, styles[labelSize])}
          >
            {label}
          </label>
        )}
        <div
          className={cx(
            styles.textareaWrapper,
            error && styles.error,
            props.disabled && styles.disabled,
          )}
        >
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <textarea
            rows={1}
            ref={ref}
            id={textareaId}
            className={cx(styles.textarea, styles[textareaSize])}
            {...props}
          />
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
