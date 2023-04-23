import { renderWithTheme } from 'utils/tests/helpers'

import TwitterContainer from '.'

describe('<TwitterContainer />', () => {
  it('should render twitter container', () => {
    const { container } = renderWithTheme(<TwitterContainer />)

    expect(container.firstChild).toHaveStyle({
      'max-height': '50rem',
      overflow: 'auto'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
