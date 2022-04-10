import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NewsCard from '.'

const props = {
  title: 'DIREITO Á MORADIA',
  description:
    'Moradores da Vila Nazaré pedem que CCDH acompanhe processo de realocação das famílias',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  date: '28 de novembro de 2021',
  slug: 'population-zero'
}

describe('<NewsCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NewsCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })
})
