import type { Meta, StoryObj } from '@storybook/react'

import { ModalContentContainer } from '.'

const meta = {
  argTypes: {},
  component: ModalContentContainer,
  tags: ['autodocs'],
  title: 'Components/Modal/ModalContentContainer',
} satisfies Meta<typeof ModalContentContainer>

export default meta
type Story = StoryObj<typeof meta>

export const ModalContentContainerDefault: Story = {
  args: {
    children: <>Content</>,
  },
}
