import { Story, Meta } from '@storybook/react'

import MediaCard, { MediaCardProps } from '.'

export default {
  title: 'MediaCard',
  component: MediaCard,
  args: {
    title: 'Lançamento do Relatório Azul 2014',
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  }
} as Meta

export const Default: Story<MediaCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <MediaCard {...args} />
  </div>
)
