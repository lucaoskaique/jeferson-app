import { Story, Meta } from '@storybook/react'
import { DownloadForOffline } from '@styled-icons/material-rounded/DownloadForOffline'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Botão'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Botão',
  icon: <DownloadForOffline />
}
