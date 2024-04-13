import type { Meta, StoryObj } from '@storybook/react'

import { defaultAvatar } from '@/assets'

import { Avatar } from './'

const meta = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarDefault: Story = {
  args: {
    src: defaultAvatar,
  },
}
