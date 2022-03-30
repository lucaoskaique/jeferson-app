import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'
import item from './mock'
export default {
  title: 'Banner',
  component: Banner,
  args: { ...item }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
)
