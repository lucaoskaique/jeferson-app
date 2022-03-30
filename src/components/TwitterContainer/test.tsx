import { renderWithTheme } from 'utils/tests/helpers'

import TwitterContainer from '.'

describe('<TwitterContainer />', () => {
  it('should render twitter container', () => {
    const { container } = renderWithTheme(<TwitterContainer />)

    expect(container.firstChild).toHaveStyle({
      'max-width': '67rem',
      'max-height': '60rem',
      overflow: 'auto'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
