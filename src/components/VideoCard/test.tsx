import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import VideoCard from '.'
const props = {
  title: 'DIREITO Á MORADIA',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}
describe('<VideoCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<VideoCard {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })
})
