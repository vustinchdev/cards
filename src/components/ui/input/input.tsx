import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import { CloseIcon, EyeIcon, SearchIcon } from '@/assets'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onClear?: () => void
  onValueChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      id: externalId,
      label,
      onChange,
      onClear,
      onValueChange,
      placeholder,
      search,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const id = useId()
    const finalId = externalId ?? id

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      onValueChange?.(event.target.value)
    }

    const isShowClearButton = onClear && value

    const classNames = {
      clearButton: s.clearButton,
      error: s.error,
      eyeIcon: s.eyeIcon,
      input: clsx(s.input, errorMessage && s.errorInput, search && s.search),
      inputContainer: clsx(s.inputContainer, disabled && s.disabled, className),
      label: s.label,
      searchIcon: s.searchIcon,
      showOrHidePassword: clsx(s.showOrHidePassword, disabled && s.disabled),
    }

    return (
      <div>
        {label && (
          <label className={classNames.label} htmlFor={finalId}>
            {label}
          </label>
        )}
        <div className={classNames.inputContainer}>
          <input
            className={classNames.input}
            disabled={disabled}
            id={finalId}
            onChange={handleChange}
            placeholder={placeholder}
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            {...rest}
          />
          {type === 'password' && (
            <button
              className={classNames.showOrHidePassword}
              disabled={disabled}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <CloseIcon /> : <EyeIcon className={classNames.eyeIcon} />}
            </button>
          )}
          {search && <SearchIcon className={classNames.searchIcon} />}
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClear}>
              <CloseIcon />
            </button>
          )}
        </div>
        {errorMessage && <div className={classNames.error}>{errorMessage}</div>}
      </div>
    )
  }
)
