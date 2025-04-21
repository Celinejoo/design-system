// src/components/Button/Button.tsx
import { cx } from "../../utils/cx"; // Emotion CSS-in-JS 라이브러리에서 제공하는 cx 함수
import styles from "./Button.module.scss"; // CSS 모듈을 사용하여 스타일을 적용
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  radius = "sm",
  size = "md",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type ?? "button"}
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        styles[`radius-${radius}`],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
      )}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};
