import { renderWithTheme } from 'utils/tests/helpers'

import 'match-media-mock'
import ImageCardSlider from '.'
import items from './mock'

describe('<ImageCardSlider />', () => {
  it('should render with 3 active items', () => {
    const { container } = renderWithTheme(<ImageCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render with dots', () => {
    const { container } = renderWithTheme(<ImageCardSlider items={items} />)
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
