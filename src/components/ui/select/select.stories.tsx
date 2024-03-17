import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectOptions = [
  { title: 'Option 1', value: 'option1' },
  { title: 'Option 2', value: 'option2' },
  { title: 'Option 3', value: 'option3' },
]

export const SelectDefault: Story = {
  args: {
    label: 'Select',
    options: selectOptions,
    placeholder: 'select oprions',
  },
  render: args => {
    return (
      <div style={{ width: '210px' }}>
        <Select {...args} />
      </div>
    )
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    options: selectOptions,
    placeholder: 'select oprions',
  },
  render: args => {
    return (
      <div style={{ width: '210px' }}>
        <Select {...args} />
      </div>
    )
  },
}
