import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

const meta = {
  argTypes: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const TabsDefault: Story = {
  args: {
    defaultValue: 'tab1',
  },

  render: args => {
    const [currentTabValue, setCurrentTabValue] = useState('tab1')

    return (
      <div>
        <Tabs {...args} onValueChange={setCurrentTabValue}>
          <TabsList>
            <TabsTrigger value={'tab1'}>tab1</TabsTrigger>
            <TabsTrigger value={'tab2'}>tab2</TabsTrigger>
            <TabsTrigger value={'tab3'}>tab3</TabsTrigger>
          </TabsList>
          <TabsContent value={'tab1'}>{'content1'}</TabsContent>
          <TabsContent value={'tab2'}>{'content2'}</TabsContent>
          <TabsContent value={'tab3'}>{'content3'}</TabsContent>
        </Tabs>
        current tab value: {currentTabValue}
      </div>
    )
  },
}
