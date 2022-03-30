import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import About from '.'
const props = {
  title: 'DIREITO Á MORADIA',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}
describe('<About />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<About {...props} />)

    expect(
      screen.getByRole('heading', { name: /Conheça o Jeferson/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
