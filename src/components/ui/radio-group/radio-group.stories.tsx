import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from './'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    children: (
      <>
        <RadioGroupItem value={'option1'}>option 1</RadioGroupItem>
        <RadioGroupItem value={'option2'}>option 2</RadioGroupItem>
        <RadioGroupItem value={'option3'}>option 3</RadioGroupItem>
      </>
    ),
  },
}
export const RadioGroupDisabled: Story = {
  args: {
    children: (
      <>
        <RadioGroupItem checked value={'option1'}>
          option 1
        </RadioGroupItem>
        <RadioGroupItem value={'option2'}>option 2</RadioGroupItem>
        <RadioGroupItem value={'option3'}>option 3</RadioGroupItem>
      </>
    ),
    disabled: true,
  },
}
