// src/components/Button/Button.tsx
import { cx } from "../../utils/cx"; // Emotion CSS-in-JS 라이브러리에서 제공하는 cx 함수
import styles from "./Select.module.scss"; // CSS 모듈을 사용하여 스타일을 적용
import { SelectProps } from "./Select.types";

export const Select = ({
  size = "md",
  label,
  name,
  options,
  value,
  disabled,
  onChange,
}: SelectProps) => {
  return (
    <div className={cx(styles.wrap)}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={cx(styles.select, styles[size])}
        name={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.value}
          </option>
        ))}
      </select>
    </div>
  );
};
