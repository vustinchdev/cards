import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  argTypes: {},
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Components/Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormDefault: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
