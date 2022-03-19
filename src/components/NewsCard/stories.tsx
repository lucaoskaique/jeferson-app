import { Story, Meta } from '@storybook/react'

import NewsCard from '.'

export default {
  title: 'NewsCard',
  component: NewsCard
} as Meta

export const Default: Story = () => <NewsCard />
