import type { Meta, StoryObj } from '@storybook/react'

import { ModalFooter } from '.'

const meta = {
  argTypes: {},
  component: ModalFooter,
  tags: ['autodocs'],
  title: 'Components/Modal/ModalFooter',
} satisfies Meta<typeof ModalFooter>

export default meta
type Story = StoryObj<typeof meta>

export const ModalFooterDefault: Story = {
  args: {
    cancelText: 'Cancel',
    title: 'Add New Deck',
  },
}
