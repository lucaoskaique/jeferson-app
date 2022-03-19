import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  title: 'Teste',
  backgroundImage: '/img/jeferson-img.jpg',
  floatImage: '/float-image.png'
}

describe('<Banner />', () => {
  it('should render background image', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
