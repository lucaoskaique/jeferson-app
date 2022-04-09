import { screen } from '@testing-library/react'
import 'match-media-mock'
import aboutSectionMock from 'components/About/mock'
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
import imageSliderMock from 'components/ImageCardSlider/mock'
import newsSliderMock from 'components/NewsCardSlider/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

const props = {
  banner: bannersMock,
  heroProps: heroPropsVideos,
  aboutSection: aboutSectionMock,
  newsSlider: [newsSliderMock[0]],
  imageSlider: [imageSliderMock[0]]
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    //menu
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()

    //footer
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Notícias/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Galeria de Fotos/i })
    ).toBeInTheDocument()
  })
})
