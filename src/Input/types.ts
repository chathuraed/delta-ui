export interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  message?: string;
  full?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (e: any) => void;
}
