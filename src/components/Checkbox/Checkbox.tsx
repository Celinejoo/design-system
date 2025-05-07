import styles from "./Checkbox.module.scss";
import { cx } from "../../utils/cx"; //
import { CheckboxProps } from "./Checkbox.types";
import { forwardRef, useId, useState } from "react";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label = "동의합니다.", labelSize = "md", inputSize = "md", id }, ref) => {
    const generatedId = useId(); // 자동 생성 ID
    const checkboxId = id || generatedId;
    const [agree, setAgree] = useState(false);
    return (
      <div className={cx(styles.wrapper)}>
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          className={cx(styles.checkbox, styles[inputSize])}
          onChange={() => setAgree(!agree)}
          checked={agree}
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
