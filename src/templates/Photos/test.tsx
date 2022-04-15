import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Photos from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

const photos = [
  {
    title: 'Foto 1',
    img: 'https://picsum.photos/id/1/400/300'
  },
  {
    title: 'Foto 2',
    img: 'https://picsum.photos/id/1/400/300'
  }
]

describe('<Photos />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<Photos photos={photos} />)

    expect(screen.getByRole('heading', { name: /fotos/i })).toBeInTheDocument()
    expect(await screen.findByText(/Foto 1/i)).toBeInTheDocument()
  })
  it('should render the heading', async () => {
    renderWithTheme(<Photos />)

    expect(
      screen.getByRole('heading', { name: /sem fotos/i })
    ).toBeInTheDocument()
  })
})
