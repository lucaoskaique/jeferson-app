import { Story, Meta } from '@storybook/react'

import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<HeadingProps>

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Conheça nossas Redes'
}
