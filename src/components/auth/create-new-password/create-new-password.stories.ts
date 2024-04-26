import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './'

const meta = {
  argTypes: {},
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Components/Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordDefault: Story = {
  args: {},
}
