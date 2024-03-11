import { CheckboxIndicatorIcon } from '@/assets/icons'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
  required,
}: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: clsx(s.indicator),
    label: clsx(s.label, disabled && s.disabledLabel),
  }

  return (
    <form>
      <div className={classNames.container}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <CheckboxIndicatorIcon />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label && (
          <label className={classNames.label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    </form>
  )
}
