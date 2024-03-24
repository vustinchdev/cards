import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItem } from './'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'option1'}>Option 1</SelectItem>
        <SelectItem value={'option2'}>Option 2</SelectItem>
        <SelectItem value={'option3'}>Option 3</SelectItem>
      </>
    ),
    label: 'Select',
    placeholder: 'select oprions',
  },
  render: args => {
    return (
      <div style={{ marginTop: '500px', width: '210px' }}>
        <Select {...args} />
      </div>
    )
  },
}

export const SelectDisabled: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'option1'}>Option 1</SelectItem>
        <SelectItem value={'option2'}>Option 2</SelectItem>
        <SelectItem value={'option3'}>Option 3</SelectItem>
      </>
    ),
    disabled: true,
    label: 'Select',
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
