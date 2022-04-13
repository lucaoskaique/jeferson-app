import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'
import items from './mock'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Showcase title="fotos" photos={items} />)
  })
})
