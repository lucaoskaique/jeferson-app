import { Story, Meta } from '@storybook/react'

import Logo2, { Logo2Props } from '.'

export default {
  title: 'Logo2',
  component: Logo2
} as Meta

export const Default: Story<Logo2Props> = (args) => <Logo2 {...args} />
