import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Hero from '.'
describe('<Hero />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Hero />)

    expect(
      screen.getByRole('heading', { name: /Confira nossas redes!/i })
    ).toBeInTheDocument()
  })
})
