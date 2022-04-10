import { Story, Meta } from '@storybook/react'

import ImageCardSlider, { ImageCardSliderProps } from '.'
import items from './mock'

export default {
  title: 'ImageCardSlider',
  component: ImageCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' }
  }
} as Meta

export const Default: Story<ImageCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ImageCardSlider {...args} />
  </div>
)
