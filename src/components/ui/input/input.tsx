import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { CloseIcon, EyeIcon, SearchIcon } from '@/assets/icons'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  disabled,
  errorMessage,
  id,
  label,
  onChange,
  onValueChange,
  placeholder,
  search,
  type,
  value,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    onValueChange?.(event.target.value)
  }

  const classNames = {
    error: s.error,
    eyeIcon: s.eyeIcon,
    input: clsx(s.input, errorMessage && s.errorInput, search && s.search, className),
    inputContainer: clsx(s.inputContainer, disabled && s.disabled),
    label: s.label,
    searchIcon: s.searchIcon,
    showOrHidePassword: s.showOrHidePassword,
  }

  return (
    <div>
      {label && (
        <label className={classNames.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={classNames.inputContainer}>
        <input
          className={classNames.input}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          type={type === 'password' && showPassword ? 'text' : type}
          {...rest}
        />
        {type === 'password' && (
          <button
            className={classNames.showOrHidePassword}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <CloseIcon /> : <EyeIcon className={classNames.eyeIcon} />}
          </button>
        )}
        {search && <SearchIcon className={classNames.searchIcon} />}
      </div>
      {errorMessage && <div className={classNames.error}>{errorMessage}</div>}
    </div>
  )
}
