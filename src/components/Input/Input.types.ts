import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type LabelSize = "xs" | "sm" | "md" | "lg";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string; // 라벨 텍스트 (optional)
  labelSize?: LabelSize;
  inputSize?: InputSize;
  id?: string; // 사이즈 (small, medium, large)
  error?: string; // 에러 메시지
  iconLeft?: ReactNode; // 왼쪽 아이콘
  iconRight?: ReactNode; // 오른쪽 아이콘
  fullWidth?: boolean; // 가로 100% 여부
  disabled?: boolean; // 비활성화 여부
}
