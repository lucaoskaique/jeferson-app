import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Hero from '.'
import items from './mock'
describe('<Hero />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Hero items={items} />)

    expect(
      screen.getByRole('heading', { name: /Confira nossas redes!/i })
    ).toBeInTheDocument()
  })
})
