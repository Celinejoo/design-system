import { InputHTMLAttributes } from "react";

export type InputSize = "sm" | "md" | "lg";
export type LabelSize = "sm" | "md" | "lg";
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string; // 라벨 텍스트 (optional)
  labelSize?: LabelSize;
  inputSize?: InputSize;
  id?: string;
  checked: boolean;
  disabled?: boolean; // 비활성화 여부
  onChange?: () => void;
  name?: string;
}
