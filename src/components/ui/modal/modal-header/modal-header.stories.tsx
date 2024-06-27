import type { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalContent, ModalTrigger } from '@/components'

import { ModalHeader } from '.'

const meta = {
  argTypes: {},
  component: ModalHeader,
  tags: ['autodocs'],
  title: 'Components/Modal/ModalHeader',
} satisfies Meta<typeof ModalHeader>

export default meta
type Story = StoryObj<typeof meta>

export const ModalHeaderDefault: Story = {
  args: {},
  render: () => {
    return (
      <Modal>
        <ModalTrigger>Open modal</ModalTrigger>
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
        </ModalContent>
      </Modal>
    )
  },
}
