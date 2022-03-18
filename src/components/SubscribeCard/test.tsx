import { renderWithTheme } from 'utils/tests/helpers'

import SubscribeCard from '.'

describe('<SubscribeCard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SubscribeCard />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
