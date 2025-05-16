import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type LabelSize = "xs" | "sm" | "md" | "lg";
export type InputVariant = "outline" | "filled" | "fullished";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string; // 라벨 텍스트 (optional)
  labelSize?: LabelSize;
  varient?: InputVariant;
  inputSize?: InputSize;
  id?: string; // 사이즈 (small, medium, large)
  error?: string; // 에러 메시지
  disabled?: boolean; // 비활성화 여부
}
