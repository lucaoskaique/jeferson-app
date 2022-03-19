import { render, screen } from '@testing-library/react'

import MediaCard from '.'

describe('<MediaCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<MediaCard />)

    expect(
      screen.getByRole('heading', { name: /MediaCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
