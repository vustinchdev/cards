import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CheckboxIndicatorIcon } from '@/assets/icons'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, id, label, ...rest }, ref) => {
    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
      container: clsx(s.container, className),
      indicator: clsx(s.indicator),
      label: clsx(s.label, disabled && s.disabledLabel),
    }

    return (
      <div className={classNames.container}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root className={s.root} id={id} ref={ref} {...rest}>
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
    )
  }
)
