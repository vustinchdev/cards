import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderDefault: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState([0, 100])

    return <Slider onValueChange={setValue} value={value} />
  },
}
