import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

export type PageProps = ComponentPropsWithoutRef<'div'>

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    }

    return (
      <div className={classNames.root} {...rest} ref={ref}>
        {children}
      </div>
    )
  }
)
