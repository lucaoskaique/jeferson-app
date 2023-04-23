// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Medias from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

const props = {
  photos: [
    {
      id: 1,
      title: 'Foto 1',
      img: 'https://picsum.photos/id/1/400/300'
    },
    {
      id: 2,
      title: 'Foto 2',
      img: 'https://picsum.photos/id/1/400/600'
    },
    {
      id: 3,
      title: 'Foto 3',
      img: 'https://picsum.photos/id/1/400/500'
    },
    {
      id: 4,
      title: 'Foto 4',
      img: 'https://picsum.photos/id/1/400/400'
    }
  ]
}

describe('<Medias />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Medias {...props} />)

    // expect(container.firstChild).toMatchSnapshot()
  })
})
