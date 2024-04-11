import type { Meta, StoryObj } from '@storybook/react'

import { EditIcon, LogOutIcon } from '@/assets'

import { Button } from '.'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    back: true,
    children: (
      <>
        <LogOutIcon />
        {'Primary Button With Icon'}
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    back: true,
    children: (
      <>
        <LogOutIcon />
        {'Secondary Button With Icon'}
      </>
    ),

    disabled: false,
    variant: 'secondary',
  },
}

export const Icon: Story = {
  args: {
    children: (
      <>
        <EditIcon />
      </>
    ),
    variant: 'icon',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
