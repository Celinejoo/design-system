import { forwardRef, useId } from "react";
import { TextareaProps } from "./Textarea.types";
import styles from "./Textarea.module.scss";
import { cx } from "../../utils/cx"; // classNames 유틸 함수

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, ...props }, ref) => {
    const generatedId = useId(); // 자동 생성 ID
    const textareaId = id ?? generatedId;
    return (
      <div className={cx(styles.wrapper)}>
        {label && (
          <label htmlFor={textareaId} className={cx(styles.label)}>
            {label}
          </label>
        )}
        <div
          className={cx(
            styles.textareaWrapper,
            props.disabled && styles.disabled,
          )}
        >
          <textarea
            ref={ref}
            id={textareaId}
            className={cx(styles.textarea)}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
