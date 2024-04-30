import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { defaultAvatar } from '@/assets'

import { Header } from '.'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderLoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
  render: args => {
    return (
      <MemoryRouter>
        <Header {...args} />
      </MemoryRouter>
    )
  },
}
export const HeaderLoggedIn: Story = {
  args: {
    avatar: defaultAvatar,
    email: 'example@gmail.con',
    isLoggedIn: true,
    name: 'user',
    onSignOut: () => {},
  },
  render: args => {
    return (
      <MemoryRouter>
        <Header {...args} />
      </MemoryRouter>
    )
  },
}
