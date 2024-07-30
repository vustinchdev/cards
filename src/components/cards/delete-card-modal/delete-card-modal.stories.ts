import type { Meta, StoryObj } from '@storybook/react'

import { DeleteCardModal } from '.'

const meta = {
  argTypes: {},
  component: DeleteCardModal,
  tags: ['autodocs'],
  title: 'Components/Cards/DeleteCardModal',
} satisfies Meta<typeof DeleteCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteCardModalDefault: Story = {
  args: {},
}
