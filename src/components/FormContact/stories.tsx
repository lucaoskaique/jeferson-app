import { Story, Meta } from '@storybook/react'

import FormContact from '.'

export default {
  title: 'Form/FormContact',
  component: FormContact
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormContact />
  </div>
)
