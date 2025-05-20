// src/components/Button/Button.tsx
import { cx } from "../../utils/cx"; // Emotion CSS-in-JS 라이브러리에서 제공하는 cx 함수
import styles from "./Button.module.scss"; // CSS 모듈을 사용하여 스타일을 적용
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  type = "button",
  fullWidth = false,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  const isIconOnly = !!iconLeft && !children && !iconRight;

  return (
    <button
      type={type ?? "button"}
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        isIconOnly && styles.iconOnly,
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={isIconOnly ? ariaLabel : undefined}
    >
      <div>
        {iconLeft && (
          <span className={cx(styles.iconLeft, styles[size])}>{iconLeft}</span>
        )}
        <span>{children}</span>
        {iconRight && (
          <span className={cx(styles.iconRight, styles[size])}>
            {iconRight}
          </span>
        )}
      </div>
    </button>
  );
};
