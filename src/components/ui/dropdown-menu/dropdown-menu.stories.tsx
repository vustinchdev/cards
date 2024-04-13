import type { Meta, StoryObj } from '@storybook/react'

import { defaultAvatar } from '@/assets'

import { DropdownMenu } from './dropdown-menu'
import { MyDeckDropdown } from './my-deck-dropdown'
import { UserDropdown } from './user-dropdown'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const MyDeckDropdownDefault: Story = {
  args: {},
  render: () => (
    <div style={{ marginLeft: '50px' }}>
      <MyDeckDropdown />
    </div>
  ),
}

export const UserDropdownDefault: Story = {
  args: {},
  render: () => (
    <div style={{ marginLeft: '200px' }}>
      <UserDropdown avatar={defaultAvatar} email={'j&johnson@gmail.com'} name={'Ivan'} />
    </div>
  ),
}
