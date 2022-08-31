import { MouseEventHandler } from 'react';

export interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  label: string;
  onClick?: () => MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}
