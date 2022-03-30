import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo2 from '.'

describe('<Logo2 />', () => {
  it('should render a normal default Logo', () => {
    renderWithTheme(<Logo2 />)
    expect(
      screen.getByLabelText(/Deputado Jeferson Fernandes/i).parentElement
    ).toHaveStyle({
      width: '100%'
    })
  })
})
