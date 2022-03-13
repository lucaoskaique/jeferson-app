import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i)
    ).toMatchSnapshot()
  })
})
