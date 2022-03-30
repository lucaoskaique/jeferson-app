import { Story, Meta } from '@storybook/react'
import { DownloadForOffline } from '@styled-icons/material-rounded/DownloadForOffline'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    background: {
      control: {
        type: 'select',
        options: ['hot', 'ice']
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Botão',
  background: 'hot'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Botão',
  icon: <DownloadForOffline />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
