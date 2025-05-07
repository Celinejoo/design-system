import { InputHTMLAttributes } from "react";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type LabelSize = "xs" | "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string; // 라벨 텍스트 (optional)
  labelSize?: LabelSize;
  inputSize?: InputSize;
  id?: string;
  checked: boolean;
  disabled?: boolean; // 비활성화 여부
  name: string;
  onChange?: () => void;
}
