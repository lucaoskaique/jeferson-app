import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<TextField />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
