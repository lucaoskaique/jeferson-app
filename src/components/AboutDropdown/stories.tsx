import { Story, Meta } from '@storybook/react'

import AboutDropdown from '.'

export default {
  title: 'AboutDropdown',
  component: AboutDropdown,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '50%', display: 'flex', justifyContent: 'center' }}>
    <AboutDropdown />{' '}
  </div>
)
