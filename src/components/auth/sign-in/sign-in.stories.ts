import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '.'

const meta = {
  argTypes: {},
  component: SignIn,
  tags: ['autodocs'],
  title: 'Components/Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInDefault: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
