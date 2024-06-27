import type { Meta, StoryObj } from '@storybook/react'

import { DeckModal } from '.'

const meta = {
  argTypes: {},
  component: DeckModal,
  tags: ['autodocs'],
  title: 'Components/Decks/DeckModal',
} satisfies Meta<typeof DeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const EditDeckModal: Story = {
  args: {
    title: 'Edit Deck',
  },
}

export const AddNewDeckModal: Story = {
  args: {
    title: 'Add New Deck',
  },
}

export const DeleteDeckModal: Story = {
  args: {
    title: 'Delete Deck',
  },
}
