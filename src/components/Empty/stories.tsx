import { Story, Meta } from '@storybook/react'

import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
Default.args = {
  title: 'Empty',
  description: 'No data',
  hasLink: true
}
