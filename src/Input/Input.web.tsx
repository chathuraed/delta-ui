import React, { FC, Fragment } from 'react';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  id,
  label,
  placeholder = '',
  error = false,
  message,
  onChange,
  full = false,
  disabled = false,
  ...props
}) => {
  return (
    <Fragment>
      <div className="relative">
        {label && (
          <label
            className="block text-xs font-medium text-gray-500"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <input
          {...props}
          className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
          id={id}
          type="text"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {message}
          </p>
        )}
      </div>
      {/* {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        className={[
          'input',
          full && 'input--full',
          error && 'input--error',
          disabled && 'input--disabled',
        ].join(' ')}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{message}</p>
      )} */}
    </Fragment>
  );
};

export default Input;
