import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Input } from './input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputPassword: Story = {
  args: {
    label: 'Password',
    placeholder: 'enter password',
    type: 'password',
  },
}

export const InputSearch: Story = {
  args: {
    placeholder: 'search',
    search: true,
    type: 'text',
  },
}

export const InputSearchDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'search',
    search: true,
    type: 'text',
  },
}

export const InputPasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Password',
    placeholder: 'enter password',
    type: 'password',
  },
}

export const InputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputWithClearButton: Story = {
  args: {
    label: 'Input With Clear Button',
    placeholder: 'Input',
    type: 'text',
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <div style={{ width: '250px' }}>
        <Input
          {...args}
          onChange={e => setValue(e.currentTarget.value)}
          onClear={() => setValue('')}
          value={value}
        />
      </div>
    )
  },
}
