import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import TextArea, { TextAreaProps } from '.'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta<TextAreaProps>

export const Default: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextArea {...args} />
  </div>
)
