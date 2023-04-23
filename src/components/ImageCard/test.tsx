import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ImageCard from '.'
const props = {
  name: 'DIREITO Á MORADIA',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<ImageCard />', () => {
  it('should render the image', () => {
    renderWithTheme(<ImageCard {...props} />)

    expect(
      screen.getByRole('img', { name: `Thumb - ${props.name}` })
    ).toBeInTheDocument()
  })
})
