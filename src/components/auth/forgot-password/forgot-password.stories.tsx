import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { ForgotPassword } from './'

const meta = {
  argTypes: {},
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Components/Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordDefault: Story = {
  args: {
    onPasswordRecover: () => {},
  },
  render: args => {
    return (
      <MemoryRouter>
        <ForgotPassword {...args} />
      </MemoryRouter>
    )
  },
}
