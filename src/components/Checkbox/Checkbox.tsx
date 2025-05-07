import { forwardRef, useId } from "react";
import styles from "./Checkbox.module.scss";
import { cx } from "../../utils/cx"; //
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label = "동의합니다.",
      labelSize = "md",
      inputSize = "md",
      id,
      disabled,
      checked,
      onChange,
      name,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId(); // 자동 생성 ID
    const checkboxId = id || generatedId;

    return (
      <div className={cx(styles.wrapper, disabled && styles.disabled)}>
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          ref={ref}
          className={cx(styles.checkbox, styles[inputSize])}
          onChange={onChange}
          checked={checked}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className={cx(styles.label, styles[labelSize])}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);
