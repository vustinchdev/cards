import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}
export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
}
