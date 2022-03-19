import { Story, Meta } from '@storybook/react'

import NewsCardSlider, { NewsCardSliderProps } from '.'
import items from './mock'

export default {
  title: 'NewsCardSlider',
  component: NewsCardSlider,
  args: { items },
  parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } }
} as Meta

export const Default: Story<NewsCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <NewsCardSlider {...args} />
  </div>
)
