import { Story, Meta } from '@storybook/react'

import NewsCard, { NewsCardProps } from '.'

export default {
  title: 'NewsCard',
  component: NewsCard,
  args: {
    title: 'DIREITO Á MORADIA',
    description:
      'Moradores da Vila Nazaré pedem que CCDH acompanhe processo de realocação das famílias',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    date: '28 de novembro de 2021'
  }
} as Meta

export const Default: Story<NewsCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <NewsCard {...args} />
  </div>
)
