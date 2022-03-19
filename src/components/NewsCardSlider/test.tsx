import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import NewsCardSlider from '.'
import items from './mock'

describe('<NewsCardSlider />', () => {
  it('should render with 3 active items', () => {
    const { container } = renderWithTheme(<NewsCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render with dots', () => {
    const { container } = renderWithTheme(<NewsCardSlider items={items} />)
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
