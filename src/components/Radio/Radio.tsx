import { forwardRef, useId } from "react";
import styles from "./Radio.module.scss";
import { cx } from "../../utils/cx"; //
import { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label = "동의합니다.",
      labelSize = "md",
      inputSize = "md",
      id,
      disabled,
      checked,
      onChange,
      name = "agree",
      ...props
    },
    ref,
  ) => {
    const generatedId = useId(); // 자동 생성 ID
    const radioId = id || generatedId;

    return (
      <div className={cx(styles.wrapper, disabled && styles.disabled)}>
        <input
          type="radio"
          id={radioId}
          name={name}
          ref={ref}
          className={cx(styles.radio, styles[inputSize])}
          onChange={onChange}
          checked={checked}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className={cx(styles.label, styles[labelSize])}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);
