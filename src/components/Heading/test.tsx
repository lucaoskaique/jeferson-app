import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a orange heading by default', () => {
    renderWithTheme(<Heading>Deputado Jeferson Fernandes</Heading>)

    expect(
      screen.getByRole('heading', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      color: '#EC6330'
    })
  })

  it('should render a blue heading when color is passed', () => {
    renderWithTheme(
      <Heading color="secondary">Deputado Jeferson Fernandes</Heading>
    )

    expect(
      screen.getByRole('heading', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      color: '#29A29E'
    })
  })

  it('should render a heading with small size', () => {
    renderWithTheme(<Heading size="small">Deputado Jeferson Fernandes</Heading>)

    expect(
      screen.getByRole('heading', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a heading with large size', () => {
    renderWithTheme(<Heading size="large">Deputado Jeferson Fernandes</Heading>)

    expect(
      screen.getByRole('heading', { name: /deputado Jeferson Fernandes/i })
    ).toHaveStyle({
      'font-size': '2.8rem'
    })
  })
})
