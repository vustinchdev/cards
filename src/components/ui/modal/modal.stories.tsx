import type { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalContent, ModalTrigger } from '.'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalDefault: Story = {
  args: {},
  render: () => {
    return (
      <Modal>
        <ModalTrigger>open modal</ModalTrigger>
        <ModalContent>Content</ModalContent>
      </Modal>
    )
  },
}
