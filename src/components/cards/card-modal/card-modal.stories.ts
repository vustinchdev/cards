import type { Meta, StoryObj } from '@storybook/react'

import { CardModal } from '.'

const meta = {
  argTypes: {},
  component: CardModal,
  tags: ['autodocs'],
  title: 'Components/Cards/CardModal',
} satisfies Meta<typeof CardModal>

export default meta
type Story = StoryObj<typeof meta>

export const AddCardModal: Story = {
  args: {
    title: 'Add New Card',
  },
}
