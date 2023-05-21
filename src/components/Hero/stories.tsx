import { Story, Meta } from '@storybook/react'

import Hero from '.'
import items from './mock'

export default {
  title: 'Hero',
  component: Hero,
  args: { items },
  parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Hero {...args} />
  </div>
)
