import { Story, Meta } from '@storybook/react'

import VideoCard, { VideoCardProps } from '.'

export default {
  title: 'VideoCard',
  component: VideoCard,
  args: {
    title: 'Lançamento do Relatório Azul 2014',
    img: 'https://source.unsplash.com/user/willianjusten/1000x2000'
  }
} as Meta

export const Default: Story<VideoCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <VideoCard {...args} />
  </div>
)
