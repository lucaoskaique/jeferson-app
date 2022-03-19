import { render, screen } from '@testing-library/react'

import NewsCard from '.'

describe('<NewsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewsCard />)

    expect(
      screen.getByRole('heading', { name: /NewsCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
