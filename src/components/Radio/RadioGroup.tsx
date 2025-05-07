import { Radio } from "./Radio";
import styles from "./Radio.module.scss";
import { cx } from "../../utils/cx"; //
import { RadioGroupProps } from "./RadioGroup.types";

export const RadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  disabled,
}: RadioGroupProps) => {
  return (
    <div className={cx(styles.group)}>
      <fieldset>
        <legend className={styles.groupLabel}>{label}</legend>
        <div className={styles.groupOptions}>
          {options.map((opt) => (
            <Radio
              key={opt.value}
              name={name}
              label={opt.label}
              value={opt.value}
              checked={value === opt.value}
              disabled={disabled || opt.disabled}
              onChange={() => onChange(opt.value)}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
};
