export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  label: string;
  name: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (next: string[]) => void;
  disabled?: boolean;
}
