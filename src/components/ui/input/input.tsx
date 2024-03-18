import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { CloseIcon, EyeIcon, SearchIcon } from '@/assets/icons'

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

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <input
          disabled={disabled}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          type={type === 'password' && showPassword ? 'text' : type}
          {...rest}
        />
        {type === 'password' && (
          <button onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <CloseIcon /> : <EyeIcon />}
          </button>
        )}
        {search && <SearchIcon />}
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}
