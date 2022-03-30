import { Story, Meta } from '@storybook/react'

import About, { AboutProps } from '.'

export default {
  title: 'About',
  component: About,
  args: {
    title: 'Lançamento do Relatório Azul 2014',
    img: 'https://source.unsplash.com/user/willianjusten/1000x2000'
  }
} as Meta

export const Default: Story<AboutProps> = (args) => <About {...args} />
