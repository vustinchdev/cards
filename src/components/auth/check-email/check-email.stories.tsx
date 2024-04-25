import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CheckEmail } from './'

const meta = {
  argTypes: {},
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Components/Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailDefault: Story = {
  args: {
    email: 'example@mail.com',
  },
  render: args => {
    return (
      <MemoryRouter>
        <CheckEmail {...args} />
      </MemoryRouter>
    )
  },
}
