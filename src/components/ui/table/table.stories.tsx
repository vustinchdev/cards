import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from './'

const meta = {
  argTypes: {},
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableDefault: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableBodyCell>Pack Name</TableBodyCell>
            <TableBodyCell>4</TableBodyCell>
            <TableBodyCell>18.03.2021</TableBodyCell>
            <TableBodyCell>Ivan Ivanov</TableBodyCell>
          </TableRow>
          <TableRow>
            <TableBodyCell>Pack Name</TableBodyCell>
            <TableBodyCell>4</TableBodyCell>
            <TableBodyCell>18.03.2021</TableBodyCell>
            <TableBodyCell>Ivan Ivanov</TableBodyCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  },
}
