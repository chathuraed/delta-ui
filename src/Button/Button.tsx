import clsx from 'clsx';
import React, { FC } from 'react';
import { ButtonProps } from './types';

const COLOR_MAP: Record<string, string> = {
  primary: 'bg-indigo-600 text-white',
  secondary: 'bg-transparent text-indigo-600',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
  dark: 'bg-gray-800 text-white',
  light: 'bg-gray-200 text-gray-700',
  link: 'bg-transparent text-blue-600',
};

const BORDER_MAP: Record<string, string> = {
  primary: 'border border-indigo-600 rounded',
  secondary: 'border border-indigo-600 rounded',
  success: 'border border-green-500 rounded',
  danger: 'border border-red-500 rounded',
  warning: 'border border-yellow-500 rounded',
  info: 'border border-blue-500 rounded',
  dark: 'border border-gray-800 rounded',
  light: 'border border-gray-200 rounded',
  link: 'border border-transparent rounded',
};

const HOVER_MAP: Record<string, string> = {
  primary: 'hover:bg-transparent hover:text-indigo-600',
  secondary: 'hover:bg-indigo-600 hover:text-white',
  success: 'hover:bg-transparent hover:text-green-500',
  danger: 'hover:bg-transparent hover:text-red-500',
  warning: 'hover:bg-transparent hover:text-yellow-500',
  info: 'hover:bg-transparent hover:text-blue-500',
  dark: 'hover:bg-transparent hover:text-gray-800',
  light: 'hover:bg-gray-800 hover:text-white',
  link: 'hover:bg-transparent hover:text-blue-600',
};

const ACTIVE_MAP: Record<string, string> = {
  primary: 'active:bg-indigo-500 active:text-white',
  secondary: 'active:bg-transparent active:text-indigo-500',
  success: 'active:bg-green-500 active:text-white',
  danger: 'active:bg-red-500 active:text-white',
  warning: 'active:bg-yellow-500 active:text-white',
  info: 'active:bg-blue-500 active:text-white',
  dark: 'active:bg-gray-800 active:text-white',
  light: 'active:bg-gray-200 active:text-gray-800 ',
  link: 'active:bg-text-gray-200 active:text-blue-700',
};

const SIZE_MAP: Record<string, string> = {
  small: 'px-4 py-1.5 text-sm font-medium',
  medium: 'px-6 py-2.5 text-sm font-medium',
  large: 'px-7 py-3 text-sm font-medium',
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        'inline-block',
        COLOR_MAP[variant],
        BORDER_MAP[variant],
        HOVER_MAP[variant],
        ACTIVE_MAP[variant],
        SIZE_MAP[size],
        'focus:outline-none focus:ring',
        props.className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
