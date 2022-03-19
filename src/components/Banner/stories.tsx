import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    title: 'Teste',
    backgroundImage: '/img/jeferson-img.png',
    floatImage: '/img/jeferson-float.png'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
