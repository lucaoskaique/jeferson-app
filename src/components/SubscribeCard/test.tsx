import { render, screen } from '@testing-library/react'

import SubscribeCard from '.'

describe('<SubscribeCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<SubscribeCard />)

    expect(
      screen.getByRole('heading', { name: /SubscribeCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
