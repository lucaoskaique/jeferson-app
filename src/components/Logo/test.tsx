import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal default Logo', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '17rem'
    })
  })

  it('should render a small Logo', () => {
    renderWithTheme(<Logo size="small" />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '13.1rem'
    })
  })
})
