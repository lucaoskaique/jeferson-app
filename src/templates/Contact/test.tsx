import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Contact from '.'

jest.mock('components/FormContact', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock FormContact"></div>
    }
  }
})

describe('<Contact />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Contact />)

    expect(
      screen.getByRole('heading', { name: /Contato/i })
    ).toBeInTheDocument()
  })
})
