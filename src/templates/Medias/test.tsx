import { screen } from '@testing-library/react'
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
      title: 'Foto 1',
      img: 'https://picsum.photos/id/1/400/300'
    },
    {
      title: 'Foto 2',
      img: 'https://picsum.photos/id/1/400/600'
    },
    {
      title: 'Foto 3',
      img: 'https://picsum.photos/id/1/400/500'
    },
    {
      title: 'Foto 4',
      img: 'https://picsum.photos/id/1/400/400'
    }
  ],
  videos: [
    {
      title: 'Foto 1',
      img: 'https://picsum.photos/id/2/400/300'
    },
    {
      title: 'Foto 2',
      img: 'https://picsum.photos/id/3/400/600'
    },
    {
      title: 'Foto 3',
      img: 'https://picsum.photos/id/4/400/500'
    },
    {
      title: 'Foto 4',
      img: 'https://picsum.photos/id/5/400/400'
    }
  ],
  audios: [
    {
      title: 'Foto 1',
      img: 'https://picsum.photos/id/6/400/300'
    },
    {
      title: 'Foto 2',
      img: 'https://picsum.photos/id/7/400/600'
    },
    {
      title: 'Foto 3',
      img: 'https://picsum.photos/id/8/400/500'
    },
    {
      title: 'Foto 4',
      img: 'https://picsum.photos/id/9/400/400'
    }
  ],
  publications: [
    {
      title: 'Foto 1',
      img: 'https://picsum.photos/id/10/400/300'
    },
    {
      title: 'Foto 2',
      img: 'https://picsum.photos/id/11/400/600'
    },
    {
      title: 'Foto 3',
      img: 'https://picsum.photos/id/12/400/500'
    },
    {
      title: 'Foto 4',
      img: 'https://picsum.photos/id/13/400/400'
    }
  ]
}
describe('<Medias />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Medias {...props} />)

    expect(screen.getByRole('heading', { name: /Medias/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
