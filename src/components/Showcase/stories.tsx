import { Story, Meta } from '@storybook/react'

import Showcase, { ShowcaseProps } from '.'
import items from './mock'

export default {
  title: 'Showcase',
  component: Showcase,
  args: {
    title: 'Fotos',
    photos: items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<ShowcaseProps>

export const Default: Story<ShowcaseProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Showcase {...args} />
  </div>
)
