import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string; // 라벨 텍스트 (optional)
  id?: string; // 사이즈 (small, medium, large)
  disabled?: boolean; // 비활성화 여부
}
