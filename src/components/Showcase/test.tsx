import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Showcase title="fotos">
        <span>content</span>
      </Showcase>
    )
  })
})
