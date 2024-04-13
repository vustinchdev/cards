import type { Meta, StoryObj } from '@storybook/react'

import { MyDeckDropdown } from './my-deck-dropdown'

const meta = {
  argTypes: {},
  component: MyDeckDropdown,
  tags: ['autodocs'],
  title: 'Components/MyDeckDropdown',
} satisfies Meta<typeof MyDeckDropdown>

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
