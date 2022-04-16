import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AboutDropdown from '.'

describe('<AboutDropdown />', () => {
  it('should render the heading', () => {
    renderWithTheme(<AboutDropdown />)

    expect(screen.getByText(/Conheça o Jeferson/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<AboutDropdown />)

    // open menu
    fireEvent.click(screen.getByText(/Conheça o Jeferson/i))

    expect(
      screen.getByRole('link', { name: /Pronunciamentos/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Propostas/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Transparência/i })
    ).toBeInTheDocument()
  })
})
