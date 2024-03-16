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
    label: 'Select',
    placeholder: 'select oprions',
  },
  render: args => {
    return (
      <div style={{ width: '210px' }}>
        <Select {...args}>
          <SelectItem value={'option1'}>{'oprion1'}</SelectItem>
          <SelectItem value={'option2'}>{'oprion2'}</SelectItem>
          <SelectItem value={'option3'}>{'oprion3'}</SelectItem>
        </Select>
      </div>
    )
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    placeholder: 'select oprions',
  },
  render: args => {
    return (
      <div style={{ width: '210px' }}>
        <Select {...args}>
          <SelectItem value={'option1'}>{'oprion1'}</SelectItem>
          <SelectItem value={'option2'}>{'oprion2'}</SelectItem>
          <SelectItem value={'option3'}>{'oprion3'}</SelectItem>
        </Select>
      </div>
    )
  },
}
