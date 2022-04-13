import { screen } from '@testing-library/react'
import newsSliderMock from 'components/NewsCardSlider/mock'
import postMock from 'components/TextContent/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Post, { PostTemplateProps } from '.'

const props: PostTemplateProps = {
  post: postMock,
  newsSlider: newsSliderMock
}

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextContent"></div>
    }
  }
})

jest.mock('components/NewsCardSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NewsCardSlider"></div>
    }
  }
})

describe('<Post />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Post {...props} />)

    expect(screen.getByTestId('Mock NewsCardSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mock TextContent')).toBeInTheDocument()
  })

  it('should not render the news slider on mobile', () => {
    renderWithTheme(<Post {...props} />)

    expect(screen.getByTestId('Mock NewsCardSlider').parentElement).toHaveStyle(
      { display: 'none' }
    )

    expect(
      screen.getByTestId('Mock NewsCardSlider').parentElement
    ).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })
})
