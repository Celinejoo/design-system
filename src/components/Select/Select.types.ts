export interface SelectOption {
  value: string;
}

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps {
  size: SelectSize;
  label?: string;
  name: string;
  value?: string;
  options: SelectOption[];
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
