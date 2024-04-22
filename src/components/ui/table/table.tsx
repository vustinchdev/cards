import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

export type TableProps = ComponentPropsWithoutRef<'table'>

export const Table = forwardRef<ElementRef<'table'>, TableProps>(({ className, ...rest }, ref) => {
  const classNames = {
    table: clsx(s.table, className),
  }

  return <table className={classNames.table} ref={ref} {...rest} />
})

export type TableHeadProps = ComponentPropsWithoutRef<'thead'>

export const TableHead = forwardRef<ElementRef<'thead'>, TableHeadProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableHead: className,
    }

    return <thead className={classNames.tableHead} ref={ref} {...rest} />
  }
)

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>

export const TableBody = forwardRef<ElementRef<'tbody'>, TableBodyProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableBody: className,
    }

    return <tbody className={classNames.tableBody} ref={ref} {...rest} />
  }
)

export type TableRowProps = ComponentPropsWithoutRef<'tr'>

export const TableRow = forwardRef<ElementRef<'tr'>, TableRowProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableRow: className,
    }

    return <tr className={classNames.tableRow} ref={ref} {...rest} />
  }
)

export type TableHeadCellProps = ComponentPropsWithoutRef<'th'>

export const TableHeadCell = forwardRef<ElementRef<'th'>, TableHeadCellProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableHeadCell: clsx(s.tableHeadCell, className),
    }

    return <th className={classNames.tableHeadCell} ref={ref} {...rest} />
  }
)

export type TableBodyCellProps = ComponentPropsWithoutRef<'td'>

export const TableBodyCell = forwardRef<ElementRef<'td'>, TableBodyCellProps>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tableBodyCell: clsx(s.tableBodyCell, className),
    }

    return <td className={classNames.tableBodyCell} ref={ref} {...rest} />
  }
)
