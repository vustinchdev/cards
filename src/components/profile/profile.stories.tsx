import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { defaultAvatar } from '@/assets'

import { Profile } from '.'

const meta = {
  argTypes: {},
  component: Profile,
  tags: ['autodocs'],
  title: 'Components/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileDefault: Story = {
  args: {
    avatar: defaultAvatar,
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
  render: args => {
    return (
      <MemoryRouter>
        <Profile {...args} />
      </MemoryRouter>
    )
  },
}
