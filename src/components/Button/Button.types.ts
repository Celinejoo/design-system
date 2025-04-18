// src/components/Button/Button.types.ts

import { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
// extends ButtonHTMLAttributes<HTMLButtonElement>
// ➔ 덕분에 onClick, disabled, type 같은 기본 버튼 속성을 ButtonProps가 자동으로 inherit 해! ➔ onClick 타입을 따로 () => void로 지정할 필요도 없고, type="submit" 같은 것도 자연스럽게 통과돼.
