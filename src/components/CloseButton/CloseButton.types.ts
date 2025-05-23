import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "sm" | "md" | "lg";

export interface CloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}
