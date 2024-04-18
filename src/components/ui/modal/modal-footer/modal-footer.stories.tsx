import type { Meta, StoryObj } from '@storybook/react'

import { ModalFooter } from '.'
import { Button } from '../../button'

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
    children: (
      <>
        <Button variant={'secondary'}>Button secondary</Button>
        <Button variant={'primary'}>Button primary</Button>
      </>
    ),
  },
}
