import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MediaCard from '.'

const props = {
  title: 'DIREITO Á MORADIA',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<MediaCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MediaCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })
})
