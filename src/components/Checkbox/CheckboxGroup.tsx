import { Checkbox } from "./Checkbox";
import styles from "./Checkbox.module.scss";
import { cx } from "../../utils/cx"; //
import { CheckboxGroupProps } from "./CheckboxGroup.types";

export const CheckboxGroup = ({
  label = "관심사",
  name,
  options,
  values,
  onChange,
  disabled,
}: CheckboxGroupProps) => {
  const toggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };
  return (
    <div className={cx(styles.group)}>
      <fieldset>
        <legend className={styles.groupLabel}>{label}</legend>
        <div className={styles.groupOptions}>
          {options.map((opt) => (
            <Checkbox
              key={opt.value}
              name={name}
              label={opt.label}
              value={opt.value}
              checked={values.includes(opt.value)}
              disabled={disabled || opt.disabled}
              onChange={() => toggle(opt.value)}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
};
