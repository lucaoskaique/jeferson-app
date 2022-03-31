import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NewsPage from '.'

describe('<NewsPage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NewsPage />)

    expect(
      screen.getByRole('heading', { name: /NewsPage/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
