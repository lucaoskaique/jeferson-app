import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Medias from '.'

describe('<Medias />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Medias />)

    expect(screen.getByRole('heading', { name: /Medias/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
