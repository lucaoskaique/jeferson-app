import { Story, Meta } from '@storybook/react'

import ImageCard, { ImageCardProps } from '.'

export default {
  title: 'ImageCard',
  component: ImageCard,
  args: {
    name: 'Lançamento do Relatório Azul 2014',
    img: 'https://source.unsplash.com/user/willianjusten/1000x2000'
  }
} as Meta

export const Default: Story<ImageCardProps> = (args) => (
  <div style={{ width: '37rem' }}>
    <ImageCard {...args} />
  </div>
)
