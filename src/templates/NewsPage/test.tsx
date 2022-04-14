import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NewsPage from '.'
import items from './mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<NewsPage />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<NewsPage news={items.slice(0, 2)} />)

    expect(
      screen.getByRole('heading', { name: /notícias/i })
    ).toBeInTheDocument()

    expect(await screen.findByText(/DIREITO Á MORADIA/i)).toBeInTheDocument()
  })
  it('should render the heading', async () => {
    renderWithTheme(<NewsPage />)

    expect(
      screen.getByRole('heading', { name: /sem notícias/i })
    ).toBeInTheDocument()
  })
})
